import React from "react";
import DeckGL from "@deck.gl/react";
import { PathLayer, IconLayer } from "@deck.gl/layers";
import { StaticMap } from "react-map-gl";

// Mapbox access token here
const MAPBOX_TOKEN =
	"pk.eyJ1IjoibmlsYXkxODA4IiwiYSI6ImNrOG1iaXp0cjBkeTEzZm12N3l3ODJweWEifQ.TDhSzGcCsjt5CsVRljpcrw";

export default class MapView extends React.Component {
	/**
        Renders the react components to the screen. In particular, the Map and its data.

	 	Returns
	 	----------
	 	The HTML formatted React components to be rendered

     **/
	render() {
		const data = this.props.data;

		/**
			Converts grade percent to the color it represents

		 	Arguments
		 	----------
		 	perc: Float
		 		The grade percent.

	 		Returns
	 		----------
	 		An array of the red, green, and blue values of the color.

     	**/
		function perc2color(perc) {
			let r, g, b = 0;
			if (perc < 50) {
				g = 255;
				r = Math.round(5.1 * perc);
			} else {
				r = 255;
				g = Math.round(510 - 5.1 * perc);
			}
			return [r, g, b];
		}

		/**
			Creates the render color that an edge will have

		 	Arguments
		 	----------
		 	item: JSON object
		 		Item sent from backend containing the path data
		 	min: Float
		 		The minimum grade in the path
		 	max: Float
		 		The maximum grade in the path

	 		Returns
	 		----------
	 		The result of perc2color(grade_percent).

     	**/
		const renderColor = (item, min, max) => {
			// get max and min grades
			let grade = item.path_data[0].grade; // between max and min
			let grade_percent = (grade - min) * 100 / (max - min);
			return perc2color(grade_percent)
		};

		// Calculating the maximum and minimum grade in the path
		const pinLayers = [];
		const pathLayers = [];
		if (data[0] && data[0].path){
			let d = data[0];
			let min_grade = Number.POSITIVE_INFINITY;
			let max_grade = Number.NEGATIVE_INFINITY;
			for (let path of d.path_data){
				if (path.grade < min_grade){
					min_grade = path.grade
				}
				if (path.grade > max_grade){
					max_grade = path.grade
				}
			}
			// Adding the start and end coordinates as pin markers
			for (let i = 0; i < d.path.length; i++){
				if (i === 0){
					const pinData = {
						name: "Start",
						coordinates: d.path[i]
					};
					pinLayers.push(pinData)
				}
				else if (i === d.path.length - 1){
					const pinData = {
						name: "Destination",
						coordinates: d.path[i]
					};
					pinLayers.push(pinData);
					continue;
				}
				// Creating a new layer for each edge with the appropriate color representing the grade of that edge
				let newData = [{color: d.color, name: d.name, path: d.path.slice(i, i+2), path_data: d.path_data.slice(i, i+2)}];
				const newLayer = new PathLayer({
					id: "path-layer" + String(i),
					data: newData,
					pickable: true,
					widthScale: 5,
					widthMinPixels: 2,
					getColor: (item) => renderColor(item, min_grade, max_grade),
				});
				pathLayers.push(newLayer);
			}
		}

		// Adding the pin icons
		for (let i = 0; i < 2; i++){
			pinLayers[i] = new IconLayer({
				id: "pin-layer",
				data:pinLayers[i],
				pickable: true,
				// iconAtlas and iconMapping are required
				// getIcon: return a string
				getIcon: d => ({
					url: "https://img.icons8.com/color/50/000000/map-pin.png",
					width: 128,
					height: 128,
					anchorY: 128
				  }),
			
				//getIcon: d => 'marker',
	
				sizeScale: 15,
				getPosition: d => d.coordinates,
				getSize: d => 5,
				// getColor: d => [d.name=='Start' ? 255 : 0, d.name=='Destination' ? 255 : 0, 0],
			});
		}
		

		let style = {
			top: "auto",
			left: "auto",
			zIndex: "0",
			marginTop: this.props.marginTop,
		};

		return (
			<DeckGL
				// initialViewState={this.props.viewport}
				viewState={this.props.viewport}
				onViewStateChange={(v) => {
					this.props._onViewStateChange(v);
				}}
				controller={true}
				layers={ [...pathLayers, ...pinLayers]}
				width={this.props.width}
				height={this.props.height}
				style={style}
			>
				<StaticMap
					mapStyle="mapbox://styles/mapbox/dark-v10"
					onViewportChange={(viewport) => this.setState({ viewport })}
					mapboxApiAccessToken={MAPBOX_TOKEN}
				/>
			</DeckGL>
		);
	}
}
