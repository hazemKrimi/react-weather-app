export type Forecast = {
	hourly: Array<{
		dt: number;
		temp: number;
		weather: Array<{ id: number; description: string }>;
	}>;
	daily: Array<{
		dt: number;
		temp: { min: number; max: number };
		weather: Array<{ id: number; description: string }>;
	}>;
};

export type ForecastResponse = {
	hourly: Array<{
		dt: number;
		temp: number;
		weather: Array<{ id: number; description: string }>;
	}>;
	daily: Array<{
		dt: number;
		temp: { min: number; max: number };
		weather: Array<{ id: number; description: string }>;
	}>;
};
