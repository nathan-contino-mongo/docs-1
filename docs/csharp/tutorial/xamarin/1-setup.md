---
title: '1 - Setup'
---

:::info
The device simulator for Xamarin-built applications will not work with Ditto. You have to run your Xamarin application on a physical device.
:::

The following guide will show you how to build a task list application using Xamarin. This tutorial also shows you how to build an example user interface for iOS. 

Follow the [official Xamarin guide for Android](https://docs.microsoft.com/en-us/xamarin/android/get-started/) for Android-specific code samples.

## macOS

Before getting started, you will need the latest version of [Xcode](https://apps.apple.com/us/app/xcode/id497799835) and [Visual Studio](https://visualstudio.microsoft.com/downloads/). This new edition of VS for Mac is still in preview, but it works better with .NET 6 and has an arm64 native binary for Apple Silicon Macs.

Once the installer is complete, launch Visual Studio and open the Preferences dialog (`Visual Studio` menu -> `Preferences...`, or the `⌘`, keyboard shortcut).

Navigate to the `Build and Debug -> SDK Locations -> .NET Core` section on the left. Under `.NET Core Command Line` browse to or enter the following in the `Location:` box:

```
/usr/local/share/dotnet/dotnet
```

This tutorial was written with Xcode 12.5.1. In addition, you should have a decent familiarity with C# and UIKit.

## Windows

Xamarin Android development can be done entirely on a Windows box, but a Mac with Xcode is required for some parts of Xamarin iOS development. It is possible to connect to a Mac from Visual Studio on a Windows PC. This setup has not been tested yet.

## 1-1 Create the App

Once you've installed the latest version of Xcode installed, Click __File > New Project__ and select `App`

Fill out the information on the form similar to the screenshot below. These are recommended values however they are not crucial to complete this tutorial:

* Name: `"Tasks"`
* Organization Identifier: `"live.ditto"`. However, feel free to use your own value here.
* Interface: SwiftUI
* Life Cycle: "UIKit App Delegate"
* Language: Swift

And finally click "Next" and select a directory to create the application.


## 1-2 Add dependencies (Cocoapods or Swift Package Manager)

Follow the instructions on the [Installation page for iOS](/installation/ios) to use CocoaPods or Swift Package Manager.


Now open __Tasks.xcworkspace__.

> From now on open up Tasks.xcworkspace and _not_ Tasks.xcproj or else you will not be able to compile references to Ditto
