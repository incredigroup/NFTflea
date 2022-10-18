import PropTypes from 'prop-types';
import { useEffect, createContext } from 'react';
// hooks
import useLocalStorage from './../hooks/useLocalStorage';
// utils
import getColorPresets, { colorPresets, defaultPreset } from './../utils/getColorPresets';
// config
 

// ----------------------------------------------------------------------

const initialState = {
  themeMode:'light',
  // Mode
  onToggleMode: () => {},
  onChangeMode: () => {},

  setColor: defaultPreset,
  colorOption: [],

};

const SettingsContext = createContext(initialState);

// ----------------------------------------------------------------------

SettingsProvider.propTypes = {
  children: PropTypes.node,
};

function SettingsProvider({ children }) {
  const [settings, setSettings] = useLocalStorage('settings', {
    themeMode: initialState.themeMode,
  });

  // Mode

  const onToggleMode = () => {
    setSettings({
      ...settings,
      themeMode: settings.themeMode === 'light' ? 'dark' : 'light',
    });
  };

  const onChangeMode = (event) => {
    setSettings({
      ...settings,
      themeMode: event.target.value,
    });
  };

  
  // Reset

  const onResetSetting = () => {
    setSettings({
      themeMode: initialState.themeMode,
      
    });
  };

  return (
    <SettingsContext.Provider
      value={{
        ...settings,

        // Mode
        onToggleMode,
        onChangeMode,

        setColor: getColorPresets(settings.themeColorPresets),
        colorOption: colorPresets.map((color) => ({
          name: color.name,
          value: color.main,
        })),

        // Reset
        onResetSetting,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}

export { SettingsProvider, SettingsContext };
