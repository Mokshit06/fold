---
title: Overview
description: A guide in my new Starlight docs site.
sidebar:
  order: 1
---

This specification is still considered a rough draft, with everything subject
to change. But we will increment version numbers when breaking changes or
major new features are added. See the [history of past versions](/spec/history).

## Design

The FOLD format seeks to balance generality and simplicity:

- **Generality:** FOLD can represent a wide variety of folded structures in
  different dimensions, including general codimensional layering information,
  general polyhedral complexes (even nonorientable nonmanifold complexes
  with holes, genus, etc.), and multiple foldings in the same file.
  It's also easy to add your own extra data, supporting use cases in existing
  (and hopefully future) computational origami software.
- **Simplicity:** FOLD can represent common folded structures simply:
  it's easy to ignore features you don't need.
  For example, **most fields are optional** and can be omitted.
  (Our library provides tools for automatically filling in optional fields
  where possible.) Similarly, if you only store one "frame" in the file,
  then you can altogether ignore the idea of frames.

## Overview

A `.fold` file is a [JSON](http://www.json.org/) (JavaScript Object Notation)
file where some fields should be interpreted with special meanings
defined in this document. JSON is a simple way of encoding numbers, strings,
arrays, and dictionaries with string keys into a text file.
A benefit of adopting this format is that [JSON parsers](http://www.json.org/)
are already available in essentially all programming languages. For example,
JavaScript has the built-in
[`JSON` module](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON),
and Python [2](https://docs.python.org/2/library/json.html) and
[3](https://docs.python.org/3/library/json.html) have
the built-in `json` library.

A `.fold` file represents one or more **frames**.
A frame can represent a crease pattern (unfolding),
a mountain-valley pattern, a folded state, a polyhedral complex,
or even an abstract polyhedral metric, linkage configuration, or linkage.
Each frame contains linked geometric information describing
folded and (optionally) layered geometry in flat arrays,
similar to information storage in the OBJ format.
At the top level of every `.fold` file is a dictionary
containing keys linking to either geometric
data for a folded structure (**frame properties**),
or metadata about the file itself (**metadata properties**).

Most properties (keys) have an `A_B` naming convention,
where `A` represents some implicit object or objects
and `B` represents some property of `A`. For example,
if `students` represents an arbitrarily ordered list
of students, then `students_name` might represent the
name of each student, while `students_age` might represent
each student's age. The value of the `students_name` property
would be a zero-indexed array of names, while
the value of the `students_age` property would be
an array of integers, where element _i_ of `students_name`
represents the name of student _i_, and element _i_
of `students_age` represents the age of the same student _i_.
(Laying out data in this flat "parallel arrays" representation
decreases the depth of the object tree and makes it easy to add
custom data onto existing objects.)

FOLD currently defines meaning for properties of the following form,
which head the sections below. All properties are optional,
but some are recommended.

- `file_...`: Metadata about the file
- `frame_...`: Metadata about a frame (folding) in the file
- `vertices_...`: Data about the (0D) vertices, in a zero-indexed array by vertex ID
- `edges_...`: Data about the (1D) edges, in a zero-indexed array by edge ID
- `faces_...`: Data about the (2D) faces, in a zero-indexed array by face ID
- `faceOrders`/`edgeOrders`: Ordering information between pairs of faces/edges, in an array
