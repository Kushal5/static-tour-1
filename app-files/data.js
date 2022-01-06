var APP_DATA = {
  "scenes": [
    {
      "id": "0-entrance",
      "name": "entrance",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -2.634114628716816,
        "pitch": -0.02607596299278825,
        "fov": 1.553801825775676
      },
      "linkHotspots": [
        {
          "yaw": -3.1250747001443635,
          "pitch": 0.3314595241111924,
          "rotation": 6.283185307179586,
          "target": "1-kitchen"
        }
      ],
      "infoHotspots": [
        {
          "yaw": 2.894000613890415,
          "pitch": -0.32693105486317364,
          "title": "Welcome",
          "text": "Welcome to Flat 6, Lot 23 Kishore Kumar Road, Laucala Beach Estate.<br><br>Click on Hotspot to begin the tour.<br><br>Contact 8375296 for more information."
        }
      ]
    },
    {
      "id": "1-kitchen",
      "name": "kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -3.0026387356801028,
        "pitch": 0.2032252308621061,
        "fov": 1.553801825775676
      },
      "linkHotspots": [
        {
          "yaw": -2.4670630822826567,
          "pitch": 0.3644338861915095,
          "rotation": 0,
          "target": "2-living_area"
        },
        {
          "yaw": 2.9039446117077556,
          "pitch": 0.797564015158855,
          "rotation": 9.42477796076938,
          "target": "4-kitchen_detail"
        },
        {
          "yaw": 3.1275969623637145,
          "pitch": 0.32550867646692794,
          "rotation": 0,
          "target": "0-entrance"
        },
        {
          "yaw": -1.6507314341912043,
          "pitch": 0.2653982536601447,
          "rotation": 0,
          "target": "3-choose_room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-living_area",
      "name": "living_area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.9610627816280939,
          "pitch": 0.3805236806490999,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -0.604814044970654,
          "pitch": 0.5571971216679614,
          "rotation": 4.71238898038469,
          "target": "3-choose_room"
        },
        {
          "yaw": 0.39768302043924386,
          "pitch": 0.13458047259361194,
          "rotation": 0,
          "target": "7-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-choose_room",
      "name": "choose_room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.054411089273848745,
          "pitch": 0.3825166532138855,
          "rotation": 10.995574287564278,
          "target": "5-room_2"
        },
        {
          "yaw": 0.3390915898424822,
          "pitch": 0.38406584116558307,
          "rotation": 7.853981633974483,
          "target": "6-room_1"
        },
        {
          "yaw": 2.367882169807384,
          "pitch": 0.17122244472983894,
          "rotation": 0,
          "target": "7-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-kitchen_detail",
      "name": "kitchen_detail",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.9150625942145574,
          "pitch": 0.4024904589593259,
          "rotation": 0,
          "target": "1-kitchen"
        },
        {
          "yaw": -2.8815346396002663,
          "pitch": 0.21700967111405411,
          "rotation": 0,
          "target": "2-living_area"
        },
        {
          "yaw": -2.579356047520859,
          "pitch": 0.4009174659983952,
          "rotation": 0.7853981633974483,
          "target": "3-choose_room"
        },
        {
          "yaw": -0.050968869255811455,
          "pitch": -0.24892122717375997,
          "rotation": 0,
          "target": "7-exit"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-room_2",
      "name": "room_2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.15601490934449558,
          "pitch": 0.5169241362029879,
          "rotation": 0.7853981633974483,
          "target": "3-choose_room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-room_1",
      "name": "room_1",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": 3.0384008469878214,
        "pitch": 0.13213229893969647,
        "fov": 1.553801825775676
      },
      "linkHotspots": [
        {
          "yaw": -2.5083128794529603,
          "pitch": 0.40693227108068797,
          "rotation": 0,
          "target": "3-choose_room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-exit",
      "name": "exit",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1368,
      "initialViewParameters": {
        "yaw": -2.3778746422821975,
        "pitch": 0.1349694457005306,
        "fov": 1.553801825775676
      },
      "linkHotspots": [
        {
          "yaw": -1.4409231300494625,
          "pitch": 0.22824143652663764,
          "rotation": 0,
          "target": "2-living_area"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "Project Title",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": false,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
