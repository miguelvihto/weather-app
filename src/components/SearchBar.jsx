import React, {useEffect, useState} from 'react'
import usePlacesAutocomplete, { getGeocode, getLatLng } from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';

import '../styles/components/_SearchBar.scss'

const weatherAPI = {
  key: "5fc20206ce3de44b6ed5e45c90387df7",
  base: "https://api.openweathermap.org/data/2.5/",
};
  
const geocodeGoogleAPI = {
  base: "https://maps.googleapis.com/maps/api/geocode/",
  key: "AIzaSyBCa9rLnc0j6dXR-iIfW9Mwi7TP3lp2Adg",
};

const SearchBar = (props) => {
  const [weather, setWeather] = useState(null);
  const [place, setPlace] = useState(null);

  const {
    ready,
    value,
    suggestions: { status, data },
    setValue,
    clearSuggestions
  } = usePlacesAutocomplete({
    requestOptions: { typies: 'locality' },
    debounce: 300
  });
  const registerRef = useOnclickOutside(() => {
    // When user clicks outside of the component, we can dismiss
    // the searched suggestions by calling this method
    clearSuggestions();
  });

  const storePlaceData = () => {
    
  }

  const handleKey = (e) => {
    if (e.key === "Enter") {
      setValue("");
      clearSuggestions();

      fetch(`${geocodeGoogleAPI.base}json?address=${value}&key=${geocodeGoogleAPI.key}`)
        .then(response => response.json())
        .then(result => {
              console.log(result);
              if(result.status === 'OK') {
                setPlace(result.results[0].formatted_address)
                let lat = result.results[0].geometry.location.lat
                let lng = result.results[0].geometry.location.lng

                fetch(
                `${weatherAPI.base}onecall?lat=${lat}&lon=${lng}&units=metric&appid=${weatherAPI.key}`
                )
                .then((response) => response.json())
                .then((result) => {
                  console.log(result);
                  setWeather(result);
                })
    
                .catch(error => {
                  console.log('WeatherAPIError: ', error)
                })  

              }

        }).catch(error => {
          console.log('geocodegoogleAPI ERROR: ', error)
          })
    }
  };

  const handleInput = e => {
    // Update the keyword of the input element
    setValue(e.target.value);
  };

  const handleSelect = ({ description }) => () => {
    // When user selects a place, we can replace the keyword without request data from API
    // by setting the second parameter as "false"
    setValue(description, false);
    clearSuggestions();
    setPlace(description)
    // Get latitude and longitude via utility functions
    getGeocode({ address: description })
      .then((results) => getLatLng(results[0]))
      .then(({ lat, lng }) => {
        console.log('📍 Coordinates: ', { lat, lng });

        fetch(`${weatherAPI.base}onecall?lat=${lat}&lon=${lng}&units=metric&appid=${weatherAPI.key}`)
        .then((response) => response.json())
              .then((result) => {
                setWeather(result);
                setValue("");
                
              })

            .catch(error => {
              console.log('WeatherAPIError: ', error)
            })

      }).catch(error => {
        console.log('😱 Error: ', error)
      });
      
  };

  useEffect(() => {
    props.storeData(weather, place)
  }, [weather, place])
  

  const renderSuggestions = () =>
    data.map(suggestion => {
      const {
        id,
        structured_formatting: { main_text, secondary_text }
      } = suggestion;

      return (
        <li
          className="search-item"
          key={id}
          onClick={handleSelect(suggestion)}
        >
          <strong>{main_text}</strong> <small>{secondary_text}</small>
        </li>
      );
    });

  return (
    <div ref={registerRef}
    className="search-box">
      <input
        className={status === 'OK' ? "search-bar list-active" : "search-bar"}
        value={value}
        onChange={handleInput}
        onKeyPress={handleKey}
        disabled={!ready}
        placeholder="Add a place..."
        spellCheck="false"
      />
      {/* We can use the "status" to decide whether we should display the dropdown or not */}
      {status === 'OK' && <ul className="search-list">{renderSuggestions()}</ul>}
    </div>
  );
};

export default SearchBar;