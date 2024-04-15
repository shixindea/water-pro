import type {
  AspectRatio,
  Coordinates,
  GetAreaRestrictions,
  ImageSize,
  VisibleArea,
} from '../typings';
import {
  applyMove,
  diff,
  fitToLimits,
  getCenter,
  rotatePoint,
} from '../service';

interface Reflect {
  horizontal: boolean;
  vertical: boolean;
}

interface FlipImageParams {
  aspectRatio: AspectRatio;
  coordinates: Coordinates;
  visibleArea: VisibleArea;
  getAreaRestrictions: GetAreaRestrictions;
  imageSize: ImageSize;
  previousFlip: Reflect;
  flip: Reflect;
  rotate: number;
}

interface FlipImageResult {
  visibleArea: VisibleArea;
  coordinates: Coordinates;
}

export function flipImage(params: FlipImageParams): FlipImageResult {
  const {
    flip,
    previousFlip,
    rotate,
    getAreaRestrictions,
    coordinates: originalCoordinates,
    visibleArea: originalVisibleArea,
    imageSize,
  } = params;

  let coordinates = { ...originalCoordinates };
  let visibleArea = { ...originalVisibleArea };

  const changed = {
    horizontal: previousFlip.horizontal !== flip.horizontal,
    vertical: previousFlip.vertical !== flip.vertical,
  };

  if (changed.horizontal || changed.vertical) {
    const imageCenter = rotatePoint(
      {
        left: imageSize.width / 2,
        top: imageSize.height / 2,
      },
      -rotate,
    );

    let oldCenter = rotatePoint(getCenter(coordinates), -rotate);
    let newCenter = rotatePoint(
      {
        left: changed.horizontal ? imageCenter.left - (oldCenter.left - imageCenter.left) : oldCenter.left,
        top: changed.vertical ? imageCenter.top - (oldCenter.top - imageCenter.top) : oldCenter.top,
      },
      rotate,
    );
    coordinates = applyMove(coordinates, diff(newCenter, getCenter(coordinates)));

    oldCenter = rotatePoint(getCenter(visibleArea), -rotate);
    newCenter = rotatePoint(
      {
        left: changed.horizontal ? imageCenter.left - (oldCenter.left - imageCenter.left) : oldCenter.left,
        top: changed.vertical ? imageCenter.top - (oldCenter.top - imageCenter.top) : oldCenter.top,
      },
      rotate,
    );
    visibleArea = applyMove(visibleArea, diff(newCenter, getCenter(visibleArea)));

    visibleArea = fitToLimits(visibleArea, getAreaRestrictions({ visibleArea, type: 'move' }));
  }

  return {
    coordinates,
    visibleArea,
  };
}
