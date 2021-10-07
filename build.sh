#!/bin/bash

BUILD_EXT=$1

if [ "${BUILD_EXT^^}" == "CSS" ]; then
    for style in src/*; do
        [[ -d $style ]] || continue
        [[ "src/seven" == $style ]] && continue
        input="${style}/${style:4}.sass"
        sassc ${input} > public/css/${style:4}.css
    done
fi
