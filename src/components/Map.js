import React, { useRef, useLayoutEffect } from 'react';
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

const Map = () => {
    const chart = useRef(null);
  
    useLayoutEffect(() => {
        let map = am4core.create("chartdiv", am4maps.MapChart);

        map.paddingRight = 20;

        map.geodata = am4geodata_worldLow;

        map.projection = new am4maps.projections.Miller();

        map.seriesContainer.draggable = false;

        map.seriesContainer.resizable = false;

        map.maxZoomLevel = 1;

        let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());

        polygonSeries.useGeodata = true;

        let polygonTemplate = polygonSeries.mapPolygons.template;
        polygonTemplate.tooltipText = "{name}";
        polygonTemplate.fill = am4core.color("#74B266");

        let hs = polygonTemplate.states.create("hover");
        hs.properties.fill = am4core.color("#367B25");

        polygonSeries.exclude = ["AQ"];

        polygonSeries.data = [{
            "id": "US",
            "name": "United States",
            "value": 100,
            "fill": am4core.color("#F05C5C")
        }];

        polygonTemplate.propertyFields.fill = "fill";

        chart.current = map
    })

    return (
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}>
        </div>
    );
};




export default Map;