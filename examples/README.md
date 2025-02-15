# Examples

These are example plugins you can register directly in your tenant. To register a plugin:
1. Navigate to the plugin page and click **Raw**.
2. Copy the URL.
3. Take note of the **export** class in the source code. This is the element name.
4. In your tenant, use the URL and the element name to register the plugin.

For more information on registering plugins, see [Registering plugins](https://help.nintex.com/en-US/formplugins/Manage/Register.htm).

## Simple
This folder contains an example of an IFrame plugin created without a build system such as npm. Simple plugins like this can be easily created using the Lit playground: https://lit.dev/playground/

For a tutorial on creating this plugin, see [Create a basic plugin using Lit](https://help.nintex.com/en-US/formplugins/Examples/CreatePlugin_LitBasicHTML.htm).

## Build Output
This folder contains plugins that were built using the npm build commands in this repository.

Please note these plugins were copied into this folder as a convenience; the provided npm command builds to a **dist** directory.

For a tutorial creating these plugins, see [Create an ifram plugin](https://help.nintextest.com/en-US/formplugins/Examples/CreatePlugin_iframe.htm).
