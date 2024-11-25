import React, { useEffect } from 'react';

// Define the Weather interface
interface Weather {
    temperature: number;
    condition: string;
    chartData: {
        labels: string[];
        datasets: Array<{
            label: string;
            data: number[];
            borderColor: string;
            backgroundColor: string;
            fill: boolean;
            tension: number;
        }>;
    };
}

interface WeatherInformationProps {
    weather: Weather;
}

export default function WeatherInformation({ weather }: WeatherInformationProps) {
    useEffect(() => {
        // Dynamically load the weather widget script
        const script = document.createElement('script');
        script.src = 'https://app3.weatherwidget.org/js/?id=ww_deaae8caf29cb';
        script.async = true;
        document.body.appendChild(script);
    }, []);

    return (
        <div className="col-lg-3 col-md-12">
            <div className="card">
                <div className="card-body text-center">
                    <h5>Weather Information</h5>
                    <p className="display-4">{weather.temperature}°C</p>
                    <p>{weather.condition}</p>

                    {/* Weather Widget */}
                    <div
                        dangerouslySetInnerHTML={{
                            __html: `
      <div id="ww_deaae8caf29cb" v="1.3" loc="id" a='{"t":"horizontal","lang":"en","sl_lpl":1,"ids":[],"font":"Arial","sl_ics":"one_a","sl_sot":"celsius","cl_bkg":"image","cl_font":"#FFFFFF","cl_cloud":"#FFFFFF","cl_persp":"#81D4FA","cl_sun":"#FFC107","cl_moon":"#FFC107","cl_thund":"#FF5722"}'>
        More forecasts: <a href="https://oneweather.org/fr/paris/30_jours/" id="ww_deaae8caf29cb_u" target="_blank">Meteo a 30 jours</a>
      </div>
    `,
                        }}
                        style={{ marginTop: '20px' }}
                    ></div>

                </div>
            </div>
        </div>
    );
}
