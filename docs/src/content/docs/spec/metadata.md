---
title: Metadata
description: A guide in my new Starlight docs site.
sidebar:
  order: 2
---

## File Metadata (`file_...`)

File-level (as opposed to [frame-level](#frame-metadata-frame_))
metadata properties can be included _only_ in the top-level JSON dictionary.
They include:

- `file_spec`: The version of the FOLD spec that the file assumes
  (a number). See the top of this spec for the current value,
  and [history](history.md) for differences between versions.
  **Strongly recommended**, in case we ever have to make
  backward-incompatible changes.
- `file_creator`: The software that created the file (a string).
  **Recommended** for files output by computer software;
  less important for files made by hand.
- `file_author`: The human author (a string).
- `file_title`: A title for the entire file (a string).
- `file_description`: A description of the entire file (a string).
- `file_classes`: A subjective interpretation about what the entire file
  represents (array of strings). Some standard file classes include
  - `"singleModel"`: A single origami model, possibly still in multiple frames
    to represent crease pattern, folded form, etc.
  - `"multiModel"`: Multiple origami models collected together into one file
  - `"animation"`: Animation of sequence of frames,
    e.g., illustrating a continuous folding motion
  - `"diagrams"`: A sequence of frames representing folding steps,
    as in origami diagrams
  - Custom classes should have a colon in them;
    see [Custom Properties](#custom-properties) below.
- `file_frames`: Array of frame dictionaries.
  See [Multiple Frames](#multiple-frames) below.

## Frame Metadata (`frame_...`)

Frame-level (as opposed to [file-level](#file-metadata-file_))
metadata properties in the FOLD format include

- `frame_author`: The human author (a string).
- `frame_title`: A title for the frame (a string).
- `frame_description`: A description of the frame (a string).
- `frame_classes`: A subjective interpretation about what the frame represents
  (array of strings). Some standard frame classes:
  - `"creasePattern"`: a crease pattern (unfolded)
  - `"foldedForm"`: a folded form/state, e.g. flat folding or 3D folding
  - `"graph"`: vertices and edges, but no lengths or faces
  - `"linkage"`: vertices and edges and edge lengths, but no faces
  - Custom classes should have a colon in them;
    see [Custom Properties](#custom-properties) below.
- `frame_attributes`: Attributes that objectively describe properties of the
  folded structure being represented (array of strings).
  Some standard frame attributes include
  - `"2D"`: the coordinates lie in 2D (xy); z coordinates are all implicitly
    or explicitly 0
  - `"3D"`: the coordinates lie in 3D (xyz) and not 2D (xy)
  - `"abstract"`: the polyhedral complex is not embedded in Euclidean space,
  so there are no vertex coordinates (but there might be edge lengths
  defining intrinsic geometry)
  <!--
  - `"concrete"`: the polyhedral complex is embedded in Euclidean space,
    so there should be vertex coordinates
    -->
  - `"manifold"` / `"nonManifold"`:
    whether the polyhedral complex is a manifold
    (has at most two faces incident to each edge)
  - `"orientable"` / `"nonOrientable"`:
    whether the polyhedral complex is orientable, meaning it can be
    assigned a consistent normal direction (and hence it is also manifold)
  - `"selfTouching"` / `"nonSelfTouching"`:
    whether the polyhedral complex has faces that touch in their
    relative interiors, in which case you probably want a face ordering
  - `"selfIntersecting"` / `"nonSelfIntersecting"`:
    whether the polyhedral complex has properly intersecting faces
  - `"cuts"` / `"noCuts"`:
    whether any edges have an assignment of `"C"`
    (cut/slit representing multiple `"B"` edges)
  - `"joins"` / `"noJoins"`:
    whether any edges have an assignment of `"J"` (join)
  - `"convexFaces"` / `"nonConvexFaces"`:
    whether all faces are convex polygons, or some are nonconvex
  - Custom attributes should have a colon in them;
    see [Custom Properties](#custom-properties) below.
- `frame_unit`: Physical or logical unit that all coordinates are
  relative to (a string). Standard defined values are as follows.
  You can also use a custom string, but it will probably not be
  understood by software.
  - `"unit"` (equivalent to not specifying a unit): no physical meaning
  - `"in"`: inches (25.4 mm)
  - `"pt"`: desktop publishing/PostScript [points](<https://en.wikipedia.org/wiki/Point_(typography)>) (1/72 in)
  - `"m"`: meters (1/299,792,458 light seconds)
  - `"cm"`: centimeters (1/100 meters)
  - `"mm"`: millimeters (1/1000 meters)
  - `"um"`: microns (1/1,000,000 meters)
  - `"nm"`: nanometers (1/1,000,000,000 meters)
