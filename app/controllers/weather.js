
import Ember from "ember"; 
import { inject as service } from '@ember/service';

export default Ember.Controller.extend({ 
    
    actions: { 
        async getWeather() { 
            try {

                console.log(this.location)

                const api_key = '3C8TRCWYPKSPU83H6U8CJ5CUR'

                const response = await fetch(
                  `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${this.location}?key=${api_key}&contentType=json`,
                  {
                    method: 'GET',
                    headers: {
                      'Content-Type': 'application/json',
                      // Add any required headers
                    },
                  }
                );
          
                if (!response.ok) {
                  throw new Error('API request failed');
                }
                
                const data = await response.json();
                this.set('weatherData', data.days);

                return this.weatherData
                console.log(this.weatherData);
              } catch (error) {
                console.error(error);
              }
        }, 
    }, 
}); 