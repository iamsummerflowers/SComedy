
export const defaultConfig = {
      hero_heading: "Welcome to Vegas Comedy Club",
      hero_subtext: "Las Vegas' Premier Underground Comedy Experience",
      about_heading: "About Us"
    };

    window.elementSdk.init({
      defaultConfig,
      onConfigChange: async (config) => {
        // Config changes handled by React state
      },
      mapToCapabilities: (config) => ({
        recolorables: [],
        borderables: [],
        fontEditable: undefined,
        fontSizeable: undefined
      }),
      mapToEditPanelValues: (config) => new Map([
        ["hero_heading", config.hero_heading || defaultConfig.hero_heading],
        ["hero_subtext", config.hero_subtext || defaultConfig.hero_subtext],
        ["about_heading", config.about_heading || defaultConfig.about_heading]
      ])
    });