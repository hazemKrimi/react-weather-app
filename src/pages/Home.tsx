import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Loader from '../components/Loader';
import Card from '../components/Card';

const Wrapper = styled.div`
    min-height: 85vh;
    padding: 2rem 0rem;
    display: grid;
    row-gap: 3rem;

    h2 {
        text-align: center;
    }

    img {
        cursor: pointer;
        width: 3rem;
        height: 3rem;
    }

    .main, .wind, .humidity {
        display: grid;
        justify-content: center;
    }

    .forecast-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(10rem, 10rem));
        column-gap: 2rem;
        justify-content: center;
    }

    .error {
        display: grid;
        justify-content: center;
        align-items: center;
        
        h2 {
            text-align: center;
            word-break: break-word;
        }
    }
`;

interface WeatherResponse {
    weather: Array<{ id: number, description: string }>,
    main: { temp: number, humidity: number },
    wind: { speed: number },
    name: string,
    sys: {
        country: string
    },
    dt: number,
};

interface ForecastResponse {
    hourly: Array<{
        dt: number,
        temp: number,
        weather: Array<{ id: number, description: string }>
    }>,
    daily: Array<{
        dt: number,
        temp: { min: number, max: number },
        weather: Array<{ id: number, description: string }>
    }>
};

interface Weather {
    description: string,
    icon: number,
    main: {
        temp: number,
        humidity: number
    },
    wind: {
        speed: number
    },
    country: string,
    timestamp: number,
    name: string
};

interface Forecast {
    hourly: Array<{ 
        dt: number, 
        temp: number, 
        weather: Array<{ id: number, description: string }> 
    }>,
    daily: Array<{
        dt: number,
        temp: { min: number, max: number },
        weather: Array<{ id: number, description: string }>
    }>
};

const Home: React.FC = () => {
    const [ weather, setWeather ] = useState<Weather | null>(null);
    const [ forecast, setForecast ] = useState<Forecast | null>(null);
    const [ loading, setLoading ] = useState<boolean>(true);
    const [ error, setError ] = useState<string>('');

    useEffect(() => {
        if (!navigator.geolocation) setError('Geolocation not supported in this browser! Try searching for a city instead');
        else navigator.geolocation.getCurrentPosition(
            async ({ coords }) => {
                try {
                    let weatherRes: Response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&units=metric`
                    );
                    let weatherResBody: WeatherResponse = await weatherRes.json();
                    setWeather({
                        description: weatherResBody.weather[0].description,
                        icon: weatherResBody.weather[0].id,
                        main: weatherResBody.main,
                        wind: weatherResBody.wind,
                        name: weatherResBody.name,
                        country: weatherResBody.sys.country,
                        timestamp: weatherResBody.dt
                    });
                    let forecastRes: Response = await fetch(
                        `https://api.openweathermap.org/data/2.5/onecall?lat=${coords.latitude}&lon=${coords.longitude}&appid=${process.env.REACT_APP_WEATHER_API_KEY}&exclude=minutely&units=metric`
                    );
                    let forecastResBody: ForecastResponse = await forecastRes.json();
                    setForecast({
                        hourly: forecastResBody.hourly,
                        daily: forecastResBody.daily
                    });
                    setLoading(false);
                } catch (err) {
                    setLoading(false);
                    console.error(err);
                    setError('Could not get weather data! Try again later');
                }
            },
            () => {
                setLoading(false);
                setError('Geolocation not active! Try searching for a city instead');
            }
        );

        return () => {
            setError('');
            setLoading(true);
        }
        // eslint-disable-next-line
    }, []);

    return !loading ? (
        <Wrapper>
            {
                weather && forecast && !error ? (
                    <>
                        <div className='main'>
                            <h2>{weather.name}, {weather.country}</h2>
                            <Card
                                date={new Date(weather.timestamp * 1000)}
                                time={false}
                                data={weather.main.temp + '°C'}
                                temp={weather.main.temp > 35 ? 'hot' : weather.main.temp < 20 ? 'cold' : null}
                                icon={weather.icon}
                                description={weather.description}
                            />
                        </div>
                        <div className='daily-forecast'>
                            <h2>Daily Forecast</h2>
                            <div className='forecast-grid'>
                                {
                                    forecast.daily.map(day => (
                                        <Card
                                            key={day.dt}
                                            date={new Date(day.dt * 1000)}
                                            time={false}
                                            data={day.temp.min + '°C/' + day.temp.max + '°C'}
                                            icon={day.weather[0].id}
                                            description={day.weather[0].description}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        <div className='hourly-forecast'>
                            <h2>Hourly Forecast</h2>
                            <div className='forecast-grid'>
                                {
                                    forecast.hourly.map(hour => (
                                        <Card
                                            key={hour.dt}
                                            date={new Date(hour.dt * 1000)}
                                            time={true}
                                            data={hour.temp + '°C'}
                                            temp={hour.temp > 35 ? 'hot' : hour.temp < 20 ? 'cold' : null}
                                            icon={hour.weather[0].id}
                                            description={hour.weather[0].description}
                                        />
                                    ))
                                }
                            </div>
                        </div>
                        <div className='wind'>
                            <h2>Wind</h2>
                            <Card
                                date={new Date(weather.timestamp * 1000)}
                                time={false}
                                data={weather.wind.speed + 'km/h'}
                                icon={781}
                            />
                        </div>
                        <div className='humidity'>
                            <h2>Humidity</h2>
                            <Card
                                date={new Date(weather.timestamp * 1000)}
                                time={false}
                                data={weather.main.humidity + '%'}
                                icon={741}
                            />
                        </div>
                    </>
                ) : (
                    <div className='error'>
                        <h2>{error}</h2>
                    </div>
                )
            }
        </Wrapper>
    ) : (
        <Wrapper>
            <Loader />
        </Wrapper>
    );
}

export default Home;