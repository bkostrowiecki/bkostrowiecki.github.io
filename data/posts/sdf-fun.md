---
title: Using signed distance function and raymarching for rendering 3D Scenes
slug: using-signed-distance-function-and-raymarching-for-rendering-3d-scenes
publicationAt: 2025-09-27
tags: OpenGL, 3D, React native
category: Projects
abstract: Summary of my recent fun with signed distance functions and raymarching
---

I've recently bought an iPad, so I decided I would like to develop something that is designed to be used with iPen on iPad. I'm pretty bad 3D graphic designer, but I really enjoy using tools like [SDFModeler](https://sascha-rode.itch.io/sdf-modeler).

First thing that I wanted to check was if I'm really able to implement SDF on react-native. I've decided to use expo-gl and implement whole rendering in Fragment Shader. Proof of concepts requires such features:
* Be able to render colorized spheres
* Spheres parameters should be passed with Textures
* Spheres should blend with each others and it should be possible to change blending settings
* Spheres can be moved around with use of the mouse

I've been able to pull it all off and it seems like it is possible to create good SDF tool with react-native.

[](/videos/sdf/sdf-poc.mp4)

Next steps requires from me to acquire knowledge. Here's my reading list for next couple of weeks:
* [https://www.boristhebrave.com/2018/04/15/dual-contouring-tutorial/](https://www.boristhebrave.com/2018/04/15/dual-contouring-tutorial/)
* [https://iquilezles.org/articles/distfunctions/](https://iquilezles.org/articles/distfunctions/)