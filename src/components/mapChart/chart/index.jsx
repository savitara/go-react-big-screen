import React, { useEffect } from 'react';
import { Scene } from '@antv/l7';
import { DrillDownLayer } from '@antv/l7-district';
import { Mapbox } from '@antv/l7-maps';

const MapPostion = () => {
  const draw = () => {
    const scene = new Scene({
      id: 'map',
      logoVisible: false,
      map: new Mapbox({
        center: [116.2825, 49.9],
        pitch: 0,
        style: 'blank',
        zoom: 1,
        minZoom: 2,
        maxZoom: 5,
      }),
    });

    scene.on('loaded', () => {
      new DrillDownLayer(scene, {
        data: [],
        viewStart: 'Country',
        viewEnd: 'City',
        fill: {
          color: {
            field: 'NAME_CHN',
            values: ['#B8E1FF', '#7DAAFF', '#3D76DD', '#0047A5', '#001D70'],
          },
        },
        popup: {
          enable: true,
          Html: (props) => {
            return <span>{props.NAME_CHN}</span>;
          },
        },
      });
    });
  };

  useEffect(() => {
    draw();
  }, []);

  return (
    <div
      id="map"
      style={{ height: '460px', justifyContent: 'center', position: 'relative' }}
    ></div>
  );
};

export default MapPostion;
