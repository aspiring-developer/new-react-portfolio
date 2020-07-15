import React from 'react';
import { SushiWebsiteThumb } from './SushiWebsiteThumb';
import { AudiologyWebsiteThumb } from './AudiologyWebsiteThumb';

export const WebThumbWrapper = () => {
  return (
    <>
      <h5 className="text-center text-info pb-2">Some of my clients' websites</h5>
      <div className="row webPageThumbRow d-flex justify-content-center align-items-center">
        <SushiWebsiteThumb />
        <AudiologyWebsiteThumb />

      </div>
    </>
  )
}