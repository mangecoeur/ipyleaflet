# Copyright (c) Jupyter Development Team.
# Distributed under the terms of the Modified BSD License.
#



def _jupyter_labextension_paths():
    return [{"src": "../labextension", "dest": "jupyter-leaflet-bis"}]


def _jupyter_nbextension_paths():
    return [
        {
            "section": "notebook",
            "src": "../nbextension",
            "dest": "jupyter-leaflet-bis",
            "require": "jupyter-leaflet-bis/extension",
        }
    ]
