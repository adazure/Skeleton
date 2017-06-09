(function(_) {

    _.MODULE(function() {

        _.jsons.ulsermultiple = [{
                "$h1": {
                    "class": "bheader",
                    "text": "Ülser Multipl"
                }
            },
            {
                "$div": {
                    "children": [{
                            "$div": {
                                "children": [{
                                        "$span": {
                                            "class": "gtitle",
                                            "text": "Formasyon"
                                        }
                                    },
                                    {
                                        "$div": {
                                            "children": [{
                                                    "$input": {
                                                        "type": "checkbox",
                                                        "value": "Aftöz",
                                                        "id": "aftoz"
                                                    }
                                                },
                                                {
                                                    "$label": {
                                                        "for": "aftoz",
                                                        "text": "Aftöz"
                                                    }
                                                },
                                                {
                                                    "$input": {
                                                        "type": "checkbox",
                                                        "value": "Oval",
                                                        "id": "oval"
                                                    }
                                                },
                                                {
                                                    "$label": {
                                                        "for": "oval",
                                                        "text": "Oval"
                                                    }
                                                },
                                                {
                                                    "$input": {
                                                        "type": "checkbox",
                                                        "value": "Yıldız",
                                                        "id": "yildiz"
                                                    }
                                                },
                                                {
                                                    "$label": {
                                                        "for": "yildiz",
                                                        "text": "Yıldız"
                                                    }
                                                },
                                                {
                                                    "$input": {
                                                        "type": "checkbox",
                                                        "value": "Sirküler",
                                                        "id": "sirkuler"
                                                    }
                                                },
                                                {
                                                    "$label": {
                                                        "for": "sirkuler",
                                                        "text": "Sirküler (Horizontal)"
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
                                "children": [{
                                        "$span": {
                                            "class": "gtitle",
                                            "text": "Boyut"
                                        }
                                    },
                                    {
                                        "$div": {
                                            "children": [{
                                                    "$input": {
                                                        "type": "checkbox",
                                                        "value": "<0.5 cm"
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
                                                        "value": "0.5-1 cm"
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
                                                        "value": "1-2 cm"
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
                                                        "value": "3-5 cm"
                                                    }
                                                },
                                                {
                                                    "$label": {
                                                        "for": "boyut4",
                                                        "text": "3-5 cm"
                                                    }
                                                },
                                                {
                                                    "$input": {
                                                        "type": "checkbox",
                                                        "value": ">5 cm"
                                                    }
                                                },
                                                {
                                                    "$label": {
                                                        "for": "boyut5",
                                                        "text": ">5 cm"
                                                    }
                                                }
                                            ]
                                        }
                                    }
                                ],
                                "class": "fgroup"
                            }
                        },
                        {
                            "$div": {
                                "children": [{
                                        "$span": {
                                            "class": "gtitle",
                                            "text": "Adet"
                                        }
                                    },
                                    {
                                        "$input": {
                                            "type": "number",
                                            "placeholder": "Adet",
                                            "title": "İzole olarak kayda geçmesini istediğiniz birden fazla ülser için sayı girebilirsiniz."
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
                    "children": [{
                        "$input": {
                            "type": "button",
                            "value": "Kaydet"
                        }
                    }]
                }
            }
        ];


    });

})(Skeleton);