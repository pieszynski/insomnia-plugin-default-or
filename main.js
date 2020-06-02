// For help writing plugins, visit the documentation to get started:
//   https://support.insomnia.rest/article/26-plugins

module.exports.templateTags = [{
  name: 'portOr',
  displayName: 'Port or default',
  description: 'Uses default port value if not overriden by another (eg. ENV) variable',
  args: [
      {
          displayName: 'Default application port value',
          type: 'number',
          defaultValue: 5000
      }, 
      {
          displayName: 'Override port value with',
          type: 'number',
          defaultValue: undefined
      }
  ],
  liveDisplayName: ([def]) => 'p:' + def.value,
  async run (context, def, ovr) {
    return ovr || def;
  }
}];
