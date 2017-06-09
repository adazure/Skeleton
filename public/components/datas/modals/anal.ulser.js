(function (_) {

    _.modalsData.analulser = [
        {
            "$h1": {
                "class": "bheader",
                "text": "Anal Fissür"
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
                                        "text": "Form"
                                    }
                                },
                                {
                                    "$div": {
                                        "children": [
                                            {
                                                "$select": {
                                                    "children": [
                                                        {
                                                            "$option": {
                                                                "value": "Derin",
                                                                "text": "Derin"
                                                            }
                                                        },
                                                        {
                                                            "$option": {
                                                                "value": "Yüzeysel",
                                                                "text": "Yüzeysel"
                                                            }
                                                        }
                                                    ],
                                                    "id": "endoskopi",
                                                    "(onchange)": "formchanger(this,event)"
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
                            "(onclick)": "Skeleton.popup.method.close"
                        }
                    }
                ]
            }
        }
    ];

})(Skeleton);