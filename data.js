const BASE_PRICE = 0.5200;
const CURR_YEAR = 2023;
const COLNAME_YEAR = "CropYear";
const MAX_DISCOUNT = -4000;

CCLSMap2022 = {
    '11': {
        '1': [-365, -250, -80, 145, 300, 440, 495, 505],
        '2': [-365, -250, -80, 145, 300, 440, 495, 505],
        '3': [-440, -285, -105, 120, 250, 400, 445, 455],
        '4': [-485, -305, -190, 65, 155, 295, 330, 330],
        '5': [-555, -440, -320, -100, 20, 95, 120, 120],
        '6': [-700, -545, -470, -290, -245, -200, -190, -190],
        '7': [-775, -640, -575, -385, -335, -290, -280, -280],
        '8': [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000],
    },
    '21': {
        '1': [-365, -250, -80, 145, 300, 440, 495, 505],
        '2': [-365, -250, -80, 145, 300, 440, 495, 505],
        '3': [-440, -285, -105, 120, 250, 400, 445, 455],
        '4': [-485, -305, -190, 65, 155, 295, 330, 330],
        '5': [-555, -440, -320, -100, 20, 95, 120, 120],
        '6': [-700, -545, -470, -290, -245, -200, -190, -190],
        '7': [-775, -640, -575, -385, -335, -290, -280, -280],
        '8': [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000],
    },
    '31': {
        '1': [-480, -285, -125, 85, 240, 390, 445, 455],
        '2': [-480, -285, -125, 85, 240, 390, 445, 455],
        '3': [-530, -300, -140, 80, 220, 370, 410, 420],
        '4': [-600, -350, -245, 50, 130, 240, 280, 285],
        '5': [-650, -485, -370, -140, -30, 30, 55, 55],
        '6': [-770, -585, -495, -310, -285, -250, -245, -245],
        '7': [-860, -680, -600, -395, -365, -335, -330, -330],
        '8': [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000],
    },
    '41': {
        '1': [-640, -380, -235, 40, 100, 185, 200, 215],
        '2': [-640, -380, -235, 40, 100, 185, 200, 215],
        '3': [-640, -380, -235, 40, 100, 185, 200, 215],
        '4': [-690, -400, -320, 0, 50, 130, 145, 155],
        '5': [-780, -585, -495, -240, -140, -70, -60, -60],
        '6': [-890, -690, -610, -425, -375, -310, -310, -310],
        '7': [-1005, -795, -735, -520, -470, -430, -430, -430],
        '8': [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000],
    },
    '51': {
        '1': [-820, -650, -500, -270, -215, -185, -180, -180],
        '2': [-820, -650, -500, -270, -215, -185, -180, -180],
        '3': [-820, -650, -500, -270, -215, -185, -180, -180],
        '4': [-820, -650, -500, -270, -215, -185, -180, -180],
        '5': [-845, -750, -680, -435, -375, -335, -325, -325],
        '6': [-1000, -845, -785, -540, -505, -450, -450, -450],
        '7': [-1100, -925, -885, -640, -600, -555, -550, -550],
        '8': [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000],
    },
    '61': {
        '1': [-935, -790, -730, -525, -465, -415, -415, -415],
        '2': [-935, -790, -730, -525, -465, -415, -415, -415],
        '3': [-935, -790, -730, -525, -465, -415, -415, -415],
        '4': [-935, -790, -730, -525, -465, -415, -415, -415],
        '5': [-935, -790, -730, -525, -465, -415, -415, -415],
        '6': [-1080, -910, -870, -700, -650, -595, -595, -595],
        '7': [-1180, -1035, -975, -795, -735, -685, -685, -685],
        '8': [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000],
    },
    '71': {
        '1': [-1135, -1075, -1015, -850, -805, -760, -760, -760],
        '2': [-1135, -1075, -1015, -850, -805, -760, -760, -760],
        '3': [-1135, -1075, -1015, -850, -805, -760, -760, -760],
        '4': [-1135, -1075, -1015, -850, -805, -760, -760, -760],
        '5': [-1135, -1075, -1015, -850, -805, -760, -760, -760],
        '6': [-1135, -1075, -1015, -850, -805, -760, -760, -760],
        '7': [-1220, -1110, -1060, -880, -860, -815, -815, -815],
        '8': [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000],
    },
    '12': {
        '1': [-680, -365, -195, 55, 175, 300, 350, 360],
        '2': [-680, -365, -195, 55, 175, 300, 350, 360],
        '3': [-710, -385, -210, 45, 130, 255, 290, 295],
        '4': [-750, -395, -290, -35, 55, 200, 230, 235],
        '5': [-820, -600, -505, -270, -130, -55, -25, -25],
        '6': [-945, -710, -640, -470, -400, -335, -305, -305],
        '7': [-1060, -805, -745, -575, -520, -455, -430, -430],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '22': {
        '1': [-680, -365, -195, 55, 175, 300, 350, 360],
        '2': [-680, -365, -195, 55, 175, 300, 350, 360],
        '3': [-710, -385, -210, 45, 130, 255, 290, 295],
        '4': [-750, -395, -290, -35, 55, 200, 230, 235],
        '5': [-820, -600, -505, -270, -130, -55, -25, -25],
        '6': [-945, -710, -640, -470, -400, -335, -305, -305],
        '7': [-1060, -805, -745, -575, -520, -455, -430, -430],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '32': {
        '1': [-805, -480, -315, -90, 5, 45, 75, 80],
        '2': [-805, -480, -315, -90, 5, 45, 75, 80],
        '3': [-845, -505, -330, -115, -25, 15, 40, 45],
        '4': [-895, -555, -400, -205, -100, -55, -40, -40],
        '5': [-1010, -750, -615, -395, -320, -270, -250, -250],
        '6': [-1120, -820, -750, -555, -500, -470, -445, -445],
        '7': [-1240, -925, -845, -665, -605, -580, -560, -560],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '42': {
        '1': [-915, -650, -520, -275, -190, -145, -125, -125],
        '2': [-915, -650, -520, -275, -190, -145, -125, -125],
        '3': [-915, -650, -520, -275, -190, -145, -125, -125],
        '4': [-965, -695, -540, -310, -250, -205, -185, -185],
        '5': [-1080, -830, -705, -455, -365, -335, -315, -315],
        '6': [-1290, -910, -825, -610, -565, -530, -505, -505],
        '7': [-1350, -1000, -915, -740, -670, -635, -610, -610],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '52': {
        '1': [-1140, -845, -735, -565, -500, -470, -450, -450],
        '2': [-1140, -845, -735, -565, -500, -470, -450, -450],
        '3': [-1140, -845, -735, -565, -500, -470, -450, -450],
        '4': [-1140, -845, -735, -565, -500, -470, -450, -450],
        '5': [-1215, -920, -850, -645, -590, -565, -540, -540],
        '6': [-1425, -1055, -990, -795, -745, -720, -700, -700],
        '7': [-1510, -1160, -1100, -905, -855, -820, -800, -800],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '62': {
        '1': [-1265, -1030, -960, -775, -735, -710, -690, -690],
        '2': [-1265, -1030, -960, -775, -735, -710, -690, -690],
        '3': [-1265, -1030, -960, -775, -735, -710, -690, -690],
        '4': [-1265, -1030, -960, -775, -735, -710, -690, -690],
        '5': [-1265, -1030, -960, -775, -735, -710, -690, -690],
        '6': [-1460, -1195, -1125, -930, -895, -865, -845, -845],
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '13': {
        '1': [-1110, -915, -845, -470, -380, -325, -255, -255],
        '2': [-1110, -915, -845, -470, -380, -325, -255, -255],
        '3': [-1150, -940, -870, -495, -405, -350, -280, -280],
        '4': [-1185, -1015, -935, -545, -455, -400, -330, -330],
        '5': [-1295, -1100, -1045, -670, -580, -510, -440, -440],
        '6': [-1405, -1175, -1110, -755, -665, -595, -525, -525],
        '7': [-1490, -1275, -1205, -835, -775, -705, -635, -635],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '23': {
        '1': [-1110, -915, -845, -470, -380, -325, -255, -255],
        '2': [-1110, -915, -845, -470, -380, -325, -255, -255],
        '3': [-1150, -940, -870, -495, -405, -350, -280, -280],
        '4': [-1185, -1015, -935, -545, -455, -400, -330, -330],
        '5': [-1295, -1100, -1045, -670, -580, -510, -440, -440],
        '6': [-1405, -1175, -1110, -755, -665, -595, -525, -525],
        '7': [-1490, -1275, -1205, -835, -775, -705, -635, -635],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '33': {
        '1': [-1215, -955, -855, -510, -445, -390, -325, -325],
        '2': [-1215, -955, -855, -510, -445, -390, -325, -325],
        '3': [-1215, -980, -895, -520, -455, -400, -325, -325],
        '4': [-1290, -1055, -975, -585, -520, -450, -375, -375],
        '5': [-1425, -1155, -1085, -725, -645, -565, -485, -485],
        '6': [-1485, -1230, -1190, -810, -760, -675, -595, -595],
        '7': [-1570, -1340, -1260, -935, -870, -785, -705, -705],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '43': {
        '1': [-1265, -990, -905, -625, -575, -535, -505, -505],
        '2': [-1265, -990, -905, -625, -575, -535, -505, -505],
        '3': [-1265, -990, -905, -625, -575, -535, -505, -505],
        '4': [-1340, -1065, -985, -670, -605, -560, -525, -525],
        '5': [-1450, -1165, -1095, -790, -735, -700, -665, -665],
        '6': [-1535, -1240, -1200, -875, -840, -805, -770, -770],
        '7': [-1620, -1350, -1270, -975, -940, -905, -870, -870],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '53': {
        '1': [-1420, -1130, -1025, -805, -770, -745, -710, -710],
        '2': [-1420, -1130, -1025, -805, -770, -745, -710, -710],
        '3': [-1420, -1130, -1025, -805, -770, -745, -710, -710],
        '4': [-1420, -1130, -1025, -805, -770, -745, -710, -710],
        '5': [-1505, -1205, -1135, -910, -885, -860, -825, -825],
        '6': [-1620, -1305, -1210, -995, -975, -950, -915, -915],
        '7': [-1705, -1380, -1325, -1105, -1085, -1060, -1025, -1025],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '63': {
        '1': [-1635, -1295, -1215, -985, -940, -915, -880, -880],
        '2': [-1635, -1295, -1215, -985, -940, -915, -880, -880],
        '3': [-1635, -1295, -1215, -985, -940, -915, -880, -880],
        '4': [-1635, -1295, -1215, -985, -940, -915, -880, -880],
        '5': [-1635, -1295, -1215, -985, -940, -915, -880, -880],
        '6': [-1705, -1385, -1295, -1080, -1050, -1020, -985, -985],
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '24': {
        '1': [-1325, -1140, -1065, -675, -650, -590, -530, -530],
        '2': [-1325, -1140, -1065, -675, -650, -590, -530, -530],
        '3': [-1325, -1140, -1065, -675, -650, -590, -530, -530],
        '4': [-1450, -1265, -1165, -775, -750, -690, -630, -630],
        '5': [-1535, -1350, -1275, -900, -875, -815, -755, -755],
        '6': [-1695, -1510, -1435, -1090, -1065, -1005, -945, -945],
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '34': {
        '1': [-1340, -1155, -1080, -690, -665, -605, -545, -545],
        '2': [-1340, -1155, -1080, -690, -665, -605, -545, -545],
        '3': [-1340, -1155, -1080, -690, -665, -605, -545, -545],
        '4': [-1465, -1280, -1180, -790, -765, -705, -645, -645],
        '5': [-1550, -1365, -1290, -915, -890, -830, -770, -770],
        '6': [-1710, -1525, -1450, -1105, -1080, -1020, -960, -960],
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '44': {
        '1': [-1455, -1270, -1195, -805, -780, -720, -660, -660],
        '2': [-1455, -1270, -1195, -805, -780, -720, -660, -660],
        '3': [-1455, -1270, -1195, -805, -780, -720, -660, -660],
        '4': [-1530, -1370, -1245, -855, -830, -770, -710, -710],
        '5': [-1605, -1430, -1330, -955, -930, -870, -810, -810],
        '6': [-1765, -1580, -1505, -1160, -1135, -1075, -1015, -1015],
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '54': {
        '1': [-1555, -1395, -1320, -910, -895, -835, -785, -785],
        '2': [-1555, -1395, -1320, -910, -895, -835, -785, -785],
        '3': [-1555, -1395, -1320, -910, -895, -835, -785, -785],
        '4': [-1555, -1395, -1320, -910, -895, -835, -785, -785],
        '5': [-1640, -1465, -1365, -1025, -1000, -940, -890, -890],
        '6': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '25': {
        '1': [-1585, -1400, -1325, -935, -910, -850, -790, -790],
        '2': [-1585, -1400, -1325, -935, -910, -850, -790, -790],
        '3': [-1585, -1400, -1325, -935, -910, -850, -790, -790],
        '4': [-1710, -1525, -1425, -1035, -1010, -950, -890, -890],
        '5': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '6': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    },
    '35': {
        '1': [-1600, -1415, -1340, -950, -925, -865, -805, -805],
        '2': [-1600, -1415, -1340, -950, -925, -865, -805, -805],
        '3': [-1600, -1415, -1340, -950, -925, -865, -805, -805],
        '4': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '5': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '6': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
    }
};

CCLSMap2023 = {
    '11': {
        '1': [-380, -250, -75, 160, 335, 510, 580, 590],
        '2': [-380, -250, -75, 160, 335, 510, 580, 590],
        '3': [-460, -280, -100, 140, 280, 465, 525, 530],
        '4': [-495, -300, -190, 70, 175, 340, 385, 385],
        '5': [-565, -450, -325, -140, 5, 85, 120, 120],
        '6': [-705, -550, -470, -355, -300, -255, -240, -240],
        '7': [-780, -645, -575, -470, -405, -360, -350, -350],
        '8': [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000]
    },
    '21': {
        '1': [-380, -250, -75, 160, 335, 510, 580, 590],
        '2': [-380, -250, -75, 160, 335, 510, 580, 590],
        '3': [-460, -280, -100, 140, 280, 465, 525, 530],
        '4': [-495, -300, -190, 70, 175, 340, 385, 385],
        '5': [-565, -450, -325, -140, 5, 85, 120, 120],
        '6': [-705, -550, -470, -355, -300, -255, -240, -240],
        '7': [-780, -645, -575, -470, -405, -360, -350, -350],
        '8': [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000]
    },
    '31': {
        '1': [-495, -280, -125, 95, 270, 455, 520, 525],
        '2': [-495, -280, -125, 95, 270, 455, 520, 525],
        '3': [-550, -295, -140, 90, 245, 425, 480, 485],
        '4': [-610, -335, -240, 60, 155, 280, 335, 335],
        '5': [-660, -490, -365, -185, -50, 10, 45, 45],
        '6': [-775, -585, -495, -375, -340, -305, -300, -300],
        '7': [-865, -680, -600, -480, -440, -410, -400, -400],
        '8': [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000]
    },
    '41': {
        '1': [-660, -375, -240, 35, 115, 215, 235, 255],
        '2': [-660, -375, -240, 35, 115, 215, 235, 255],
        '3': [-660, -375, -240, 35, 115, 215, 235, 255],
        '4': [-705, -395, -315, 0, 55, 150, 170, 185],
        '5': [-800, -595, -495, -300, -180, -100, -85, -85],
        '6': [-895, -690, -605, -510, -445, -380, -380, -380],
        '7': [-1010, -795, -735, -630, -565, -525, -525, -525],
        '8': [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000]
    },
    '51': {
       '1': [-835, -655, -495, -335, -265, -235, -230, -230],
       '2': [-835, -655, -495, -335, -265, -235, -230, -230],
       '3': [-835, -655, -495, -335, -265, -235, -230, -230],
       '4': [-835, -655, -495, -335, -265, -235, -230, -230],
       '5': [-855, -760, -685, -535, -465, -420, -415, -410],
       '6': [-1005, -855, -785, -655, -610, -555, -555, -555],
       '7': [-1105, -930, -885, -770, -730, -675, -675, -675],
       '8': [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000]
    },
    '61': {
        '1': [-945, -800, -735, -545, -485, -445, -445, -445],
        '2': [-945, -800, -735, -545, -485, -445, -445, -445],
        '3': [-945, -800, -735, -545, -485, -445, -445, -445],
        '4': [-945, -800, -735, -545, -485, -445, -445, -445],
        '5': [-945, -800, -735, -545, -485, -445, -445, -445],
        '6': [-1095, -920, -880, -720, -670, -625, -625, -625],
        '7': [-1195, -1040, -980, -815, -760, -715, -715, -715],
        '8': [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000]
    },
    '71': {
        '1': [-1145, -1090, -1030, -875, -835, -795, -795, -795],
        '2': [-1145, -1090, -1030, -875, -835, -795, -795, -795],
        '3': [-1145, -1090, -1030, -875, -835, -795, -795, -795],
        '4': [-1145, -1090, -1030, -875, -835, -795, -795, -795],
        '5': [-1145, -1090, -1030, -875, -835, -795, -795, -795],
        '6': [-1145, -1090, -1030, -875, -835, -795, -795, -795],
        '7': [-1230, -1125, -1075, -905, -885, -850, -850, -850],
        '8': [-2000, -2000, -2000, -2000, -2000, -2000, -2000, -2000]
    },
    '12': {
        '1': [-655, -345, -175, 55, 170, 300, 350, 360],
        '2': [-655, -345, -175, 55, 170, 300, 350, 360],
        '3': [-680, -360, -185, 50, 125, 260, 290, 300],
        '4': [-725, -370, -270, -30, 55, 205, 235, 240],
        '5': [-790, -585, -485, -260, -125, -45, -20, -20],
        '6': [-905, -700, -620, -470, -405, -345, -315, -315],
        '7': [-1025, -785, -730, -575, -530, -465, -440, -440],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '22': {
        '1': [-655, -345, -175, 55, 170, 300, 350, 360],
        '2': [-655, -345, -175, 55, 170, 300, 350, 360],
        '3': [-680, -360, -185, 50, 125, 260, 290, 300],
        '4': [-725, -370, -270, -30, 55, 205, 235, 240],
        '5': [-790, -585, -485, -260, -125, -45, -20, -20],
        '6': [-905, -700, -620, -470, -405, -345, -315, -315],
        '7': [-1025, -785, -730, -575, -530, -465, -440, -440],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '32': {
        '1': [-815, -470, -300, -90, 5, 45, 70, 80],
        '2': [-815, -470, -300, -90, 5, 45, 70, 80],
        '3': [-855, -490, -320, -115, -20, 20, 40, 40],
        '4': [-905, -545, -375, -200, -100, -55, -45, -45],
        '5': [-1020, -740, -600, -395, -325, -275, -260, -260],
        '6': [-1120, -810, -735, -560, -505, -475, -455, -455],
        '7': [-1240, -910, -835, -670, -610, -590, -570, -570],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '42': {
        '1': [-920, -635, -500, -275, -190, -150, -135, -135],
        '2': [-920, -635, -500, -275, -190, -150, -135, -135],
        '3': [-920, -635, -500, -275, -190, -150, -135, -135],
        '4': [-970, -670, -520, -315, -255, -215, -195, -195],
        '5': [-1090, -825, -695, -450, -370, -340, -320, -320],
        '6': [-1300, -905, -800, -615, -565, -535, -510, -510],
        '7': [-1350, -985, -905, -740, -675, -645, -625, -625],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '52': {
        '1': [-1140, -835, -725, -560, -500, -475, -455, -455],
        '2': [-1140, -835, -725, -560, -500, -475, -455, -455],
        '3': [-1140, -835, -725, -560, -500, -475, -455, -455],
        '4': [-1140, -835, -725, -560, -500, -475, -455, -455],
        '5': [-1215, -910, -840, -650, -595, -575, -555, -555],
        '6': [-1425, -1040, -975, -800, -755, -735, -715, -715],
        '7': [-1510, -1145, -1085, -910, -865, -835, -815, -815],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '62': {
        '1': [-1265, -1025, -950, -785, -750, -725, -710, -710],
        '2': [-1265, -1025, -950, -785, -750, -725, -710, -710],
        '3': [-1265, -1025, -950, -785, -750, -725, -710, -710],
        '4': [-1265, -1025, -950, -785, -750, -725, -710, -710],
        '5': [-1265, -1025, -950, -785, -750, -725, -710, -710],
        '6': [-1460, -1190, -1115, -935, -905, -880, -860, -860],
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '13': {
        '1': [-1110,-915,-845,-470,-380,-325,-255,-255],
        '2': [-1110,-915,-845,-470,-380,-325,-255,-255],
        '3': [-1150, -940, -870, -495, -405, -350, -280, -280],
        '4': [-1185, -1015, -935, -545, -455, -400, -330, -330],
        '5': [-1295, -1100, -1045, -670, -580, -510, -440, -440],
        '6': [-1405, -1175, -1110, -755, -665, -595, -525, -525],
        '7': [-1490, -1275, -1205, -835, -775, -705, -635, -635],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '23': {
        '1': [-1110,-915,-845,-470,-380,-325,-255,-255],
        '2': [-1110,-915,-845,-470,-380,-325,-255,-255],
        '3': [-1150, -940, -870, -495, -405, -350, -280, -280],
        '4': [-1185, -1015, -935, -545, -455, -400, -330, -330],
        '5': [-1295, -1100, -1045, -670, -580, -510, -440, -440],
        '6': [-1405, -1175, -1110, -755, -665, -595, -525, -525],
        '7': [-1490, -1275, -1205, -835, -775, -705, -635, -635],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '33': {
        '1': [-1215, -955, -855, -510, -445, -390, -325, -325],
        '2': [-1215, -955, -855, -510, -445, -390, -325, -325],
        '3': [-1215, -980, -895, -520, -455, -400, -325, -325],
        '4': [-1290, -1055, -975, -585, -520, -450, -375, -375],
        '5': [-1425, -1155, -1085, -725, -645, -565, -485, -485],
        '6': [-1485, -1230, -1190, -810, -760, -675, -595, -595],
        '7': [-1570, -1340, -1260, -935, -870, -785, -705, -705],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '43': {
        '1': [-1265, -995, -910, -630, -580, -545, -515, -515],
        '2': [-1265, -995, -910, -630, -580, -545, -515, -515],
        '3': [-1265, -995, -910, -630, -580, -545, -515, -515],
        '4': [-1340, -1070, -985, -675, -610, -570, -540, -540],
        '5': [-1450, -1170, -1095, -795, -745, -710, -680, -680],
        '6': [-1535, -1245, -1200, -875, -845, -810, -780, -780],
        '7': [-1625, -1355, -1270, -975, -945, -915, -885, -885],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '53': {
        '1': [-1420, -1110, -1010, -815, -775, -755, -725, -725],
        '2': [-1420, -1110, -1010, -815, -775, -755, -725, -725],
        '3': [-1420, -1110, -1010, -815, -775, -755, -725, -725],
        '4': [-1420, -1110, -1010, -815, -775, -755, -725, -725],
        '5': [-1505, -1190, -1120, -915, -895, -870, -840, -840],
        '6': [-1620, -1290, -1210, -1000, -980, -960, -930, -930],
        '7': [-1705, -1360, -1310, -1110, -1090, -1065, -1035, -1035],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '63': {
        '1': [-1635, -1275, -1200, -990, -955, -930, -900, -900],
        '2': [-1635, -1275, -1200, -990, -955, -930, -900, -900],
        '3': [-1635, -1275, -1200, -990, -955, -930, -900, -900],
        '4': [-1635, -1275, -1200, -990, -955, -930, -900, -900],
        '5': [-1635, -1275, -1200, -990, -955, -930, -900, -900],
        '6': [-1705, -1365, -1285, -1085, -1055, -1030, -1000, -1000],
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '24': {
        '1': [-1325, -1145, -1070, -675, -650, -590, -530, -530],
        '2': [-1325, -1145, -1070, -675, -650, -590, -530, -530],
        '3': [-1325, -1145, -1070, -675, -650, -590, -530, -530],
        '4': [-1450, -1270, -1170, -775, -750, -690, -630, -630],
        '5': [-1535, -1355, -1280, -900, -875, -815, -755, -755],
        '6': [-1695, -1515, -1440, -1090, -1065, -1005, -945, -945],
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '34': {
        '1': [-1340, -1160, -1085, -690, -665, -605, -545, -545],
        '2': [-1340, -1160, -1085, -690, -665, -605, -545, -545],
        '3': [-1340, -1160, -1085, -690, -665, -605, -545, -545],
        '4': [-1465, -1285, -1185, -790, -765, -705, -645, -645],
        '5': [-1550, -1370, -1295, -915, -890, -830, -770, -770],
        '6': [-1710, -1530, -1455, -1105, -1080, -1020, -960, -960],
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '44': {
        '1': [-1455, -1270, -1195, -805, -780, -720, -660, -660],
        '2': [-1455, -1270, -1195, -805, -780, -720, -660, -660],
        '3': [-1455, -1270, -1195, -805, -780, -720, -660, -660],
        '4': [-1530, -1370, -1245, -855, -830, -770, -710, -710],
        '5': [-1605, -1430, -1330, -955, -930, -870, -810, -810],
        '6': [-1765, -1580, -1505, -1160, -1135, -1075, -1015, -1015],
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '54': {
        '1': [-1555, -1395, -1320, -910, -895, -835, -785, -785],
        '2': [-1555, -1395, -1320, -910, -895, -835, -785, -785],
        '3': [-1555, -1395, -1320, -910, -895, -835, -785, -785],
        '4': [-1555, -1395, -1320, -910, -895, -835, -785, -785],
        '5': [-1640, -1465, -1365, -1025, -1000, -940, -890, -890],
        '6': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT], 
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '25': {
        '1': [-1585, -1400, -1325, -935, -910, -850, -790, -790],
        '2': [-1585, -1400, -1325, -935, -910, -850, -790, -790],
        '3': [-1585, -1400, -1325, -935, -910, -850, -790, -790],
        '4': [-1710, -1525, -1425, -1035, -1010, -950, -890, -890],
        '5': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '6': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT], 
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    },
    '35': {
        '1': [-1600, -1415, -1340, -950, -925, -865, -805, -805],
        '2': [-1600, -1415, -1340, -950, -925, -865, -805, -805],
        '3': [-1600, -1415, -1340, -950, -925, -865, -805, -805],
        '4': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '5': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '6': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT], 
        '7': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT],
        '8': [MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT, MAX_DISCOUNT]
    }
    // Add more data as needed
};

// Extraneous
// Crop Year [2023, 2022]
const extMap = {
    '0': [0,0],
    '01': [-195,-200],
    '02': [-685,-670],
    '11': [-375,-350],
    '12': [-540,-525],
    '71': [MAX_DISCOUNT,MAX_DISCOUNT],
    '72': [MAX_DISCOUNT,MAX_DISCOUNT],
    '*1': [-480,-465],
    '*2': [-650,-650]
    // Add more data as needed
};

// Micronaire
var micMap = new TreeMap();
// Crop Year [2023, 2022]
micMap.put(0,[-1835,-1840]);
micMap.put(25,[-1360,-1415]);
micMap.put(27,[-925,-950]);
micMap.put(30,[-625,-650]);
micMap.put(33,[-460,-475]);
micMap.put(35,[0,0]);
micMap.put(37,[10,5]);
micMap.put(43,[0,0]);
micMap.put(50,[-240,-235]);
micMap.put(53,[-390,-390]);

// Fiber Strength
var strengthMap = new TreeMap();

strengthMap.put(0,[-700,-600]);
strengthMap.put(18,[-645,-515]);
strengthMap.put(20,[-640,-510]);
strengthMap.put(21,[-635,-505]);
strengthMap.put(22,[-600,-480]);
strengthMap.put(23,[-585,-465]);
strengthMap.put(24,[-570,-455]);
strengthMap.put(25,[-515,-410]);
strengthMap.put(26,[0,0]);
strengthMap.put(29,[5,5]);
strengthMap.put(30,[20,15]);
strengthMap.put(31,[35,30]);
strengthMap.put(33,[50,40]);

// Length Uniformity
var uniMap = new TreeMap();

uniMap.put(0,[-110,-90]);
uniMap.put(78,[-60,-60]);
uniMap.put(79,[-50,-50]);
uniMap.put(80,[0,0]);
uniMap.put(82,[5,5]);
uniMap.put(83,[10,10]);
uniMap.put(84,[15,15]);
uniMap.put(85,[20,20]);
uniMap.put(86,[25,20]);

const argIndicesMap = new Map();
const argNames = ["C1","C2","Leaf","Stpl","Mic","Ext","Str","Uni",COLNAME_YEAR];

// C1, C2, Leaf, Stpl, Mic, Ext, Strength, Uni
function setArgIndices(headerRow) {
    const headerRowArgs = headerRow.split(',');
    const cleanArgs = headerRowArgs.map(arg => arg.replace(/[^a-zA-Z0-9]/g, ''));
    argNames.map(arg => argIndicesMap.set(arg, cleanArgs.indexOf(arg)));
}

function stringFloatRD(string) {
    return Math.floor(parseFloat(string));
}

function stplIndex(Stpl) {
    const stplInt = parseInt(Stpl, 10);
    return Math.min(Math.max(stplInt-31,0),7);
}

// Main Chart: Colors (Grade), Leaf, and Staple
function queryCCLS(C1, C2, Leaf, Stpl, Year) {
    if (C1 === '8') {
        return MAX_DISCOUNT;
    }
    
    const CCLSMap = Year === CURR_YEAR ? CCLSMap2023 : CCLSMap2022;
    
    const color = C1+C2;
    if (color in CCLSMap && CCLSMap[color] && CCLSMap[color][Leaf] && Array.isArray(CCLSMap[color][Leaf])) {
        return CCLSMap[color][Leaf][stplIndex(Stpl)];
    }
    return null;
}

function queryExtraneous(Ext, Year) {
    if (Ext in extMap) {
        return extMap[Ext][CURR_YEAR-Year];
    } else if (Ext.length > 1) {
        return extMap['*'+Ext[1]][CURR_YEAR-Year];
    }
    return null;
}

function queryMicronaire(Mic, Year) {
    const micKey = stringFloatRD(Mic)
    return micMap.floorKey(micKey)[CURR_YEAR-Year];
}

function queryStrength(Strength, Year) {
    const strengthKey = stringFloatRD(Strength)
    return strengthMap.floorKey(strengthKey)[CURR_YEAR-Year];
}

function queryUniform(Uni, Year) {
    const uniKey = stringFloatRD(Uni)
    return uniMap.floorKey(uniKey)[CURR_YEAR-Year];
}

function queryFinalPrices(row) {
    
    if (row===null) return null;
    const [C1, C2, Leaf, Stpl, Mic, Ext, Strength, Uni, Year] = [row[argIndicesMap.get("C1")],row[argIndicesMap.get("C2")],row[argIndicesMap.get("Leaf")],row[argIndicesMap.get("Stpl")],row[argIndicesMap.get("Mic")],row[argIndicesMap.get("Ext")],row[argIndicesMap.get("Str")],row[argIndicesMap.get("Uni")],parseInt(row[argIndicesMap.get(COLNAME_YEAR)],10)];

    console.log(`Arguments: colors=${C1+C2}, leaf=${Leaf}, stpl=${Stpl}, mic=${Mic}, ext=${Ext}, strength=${Strength}, uniformity=${Uni} (${Year})`);
    // Main Chart: Colors (Grade), Leaf, and Staple
    var finalPrice = BASE_PRICE * 10000;
    const CCLS = queryCCLS(C1, C2, Leaf, Stpl, Year);
    if (CCLS!==null) {finalPrice+=CCLS;}
    
    const extraneous = queryExtraneous(Ext, Year);
    if (extraneous!==null) {finalPrice+=extraneous;}

    const micronaire = queryMicronaire(Mic, Year);
    if (micronaire!==null) {finalPrice+=micronaire;}

    const strength = queryStrength(Strength, Year);
    if (strength!==null) {finalPrice+=strength;}

    const uniform = queryUniform(Uni, Year);
    if (uniform!==null) {finalPrice+=uniform;}
    console.log("Final price: "+finalPrice);

    return finalPrice/10000;
}