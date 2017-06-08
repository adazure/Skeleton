(function (_) {

    function changer(e){
        console.clear();
        console.log(e.data);
    }

    _.modalsData.polip = [
        {
            "$h1": {
                "class": "bheader",
                "text": "Polip"
            }
        },
        {
            "$div": {
                "children": [
                    {
                        "$div": {
                            "children": [
                                {
                                    "$span": {
                                        "class": "gtitle",
                                        "text": "Adet",
                                    }
                                },
                                {
                                    "$input": {
                                        "type": "number",
                                        "id": "adet",
                                        "name":"adet",
                                        "style": "width:100px;",
                                        "placeholder": "Adet",
                                        "(keyup)": changer
                                    }
                                }
                            ],
                            "class": "fgroup"
                        }
                    },
                    {
                        "$div": {
                            "children": [
                                {
                                    "$span": {
                                        "class": "gtitle",
                                        "text": "Tipi"
                                    }
                                },
                                {
                                    "$div": {
                                        "children": [
                                            {
                                                "$label": {
                                                    "children": [
                                                        {
                                                            "$input": {
                                                                "type": "checkbox",
                                                                "id": "sapli",
                                                                "value": "Saplı",
                                                                "(click)": changer
                                                            },
                                                            "$label": {
                                                                "for": "sapli",
                                                                "text": "Saplı"
                                                            }
                                                        }
                                                    ]
                                                }
                                            },
                                            {
                                                "$label": {
                                                    "children": [
                                                        {
                                                            "$input": {
                                                                "type": "checkbox",
                                                                "id": "sapsiz",
                                                                "value": "Sapsız",
                                                                "(click)": changer
                                                            },
                                                            "$label": {
                                                                "for": "sapsiz",
                                                                "text": "Sapsız"
                                                            }
                                                        }
                                                    ]
                                                }
                                            }
                                        ],
                                        "class": "group-label-list"
                                    }
                                }
                            ],
                            "class": "fgroup"
                        }
                    },
                    {
                        "$div": {
                            "children": [
                                {
                                    "$span": {
                                        "class": "gtitle",
                                        "text": "Boyut"
                                    }
                                },
                                {
                                    "$div": {
                                        "children": [
                                            {
                                                "$input": {
                                                    "type": "checkbox",
                                                    "id": "boyut1",
                                                    "value": "<0.5 cm",
                                                    "(click)": changer
                                                }
                                            },
                                            {
                                                "$label": {
                                                    "for": "boyut1",
                                                    "text": "<0.5 cm"
                                                }
                                            },
                                            {
                                                "$input": {
                                                    "type": "checkbox",
                                                    "id": "boyut2",
                                                    "value": "0.5-1 cm",
                                                    "(click)": changer
                                                }
                                            },
                                            {
                                                "$label": {
                                                    "for": "boyut2",
                                                    "text": "0.5-1 cm"
                                                }
                                            },
                                            {
                                                "$input": {
                                                    "type": "checkbox",
                                                    "id": "boyut3",
                                                    "value": "1-2 cm",
                                                    "(click)": "iskelet"
                                                }
                                            },
                                            {
                                                "$label": {
                                                    "for": "boyut3",
                                                    "text": "1-2 cm"
                                                }
                                            },
                                            {
                                                "$input": {
                                                    "type": "checkbox",
                                                    "id": "boyut4",
                                                    "value": ">3 cm",
                                                    "(click)": changer
                                                }
                                            },
                                            {
                                                "$label": {
                                                    "for": "boyut4",
                                                    "text": ">3 cm"
                                                }
                                            }
                                        ],
                                        "class": "group-label-list"
                                    }
                                }
                            ],
                            "class": "fgroup"
                        }
                    }
                ],
                "id": "modalpage-content"
            }
        },
        {
            "$div": {
                "children": [
                    {
                        "$input": {
                            "type": "button",
                            "value": "Kaydet",
                            "(click)": changer
                        }
                    }
                ]
            }
        }
    ];

})(SkeletonAction);
