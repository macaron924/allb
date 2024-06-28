const reward_index = ["medal", "parts4", "parts3", "parts2", "parts1"];
const grade_index = ["S", "A", "B", "C", "D"];
const ranking_index = ["r10", "r100", "r1000", "r10000", "r100000"];

let daily_reward = {
    S: { medal: 1200, parts4: 0, parts3: 20, parts2: 50, parts1: 100 },
    A: { medal: 1100, parts4: 0, parts3: 15, parts2: 50, parts1: 100 },
    B: { medal: 950, parts4: 0, parts3: 10, parts2: 30, parts1: 100 },
    C: { medal: 800, parts4: 0, parts3: 10, parts2: 30, parts1: 100 },
    D: { medal: 700, parts4: 0, parts3: 10, parts2: 30, parts1: 100 }
}

let weekly_reward = {
    S: {
        r10: { medal: 12500, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r100: { medal: 11500, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r1000: { medal: 10500, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r10000: { medal: 10000, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r100000: { medal: 9500, parts4: 0, parts3: 0, parts2: 0, parts1: 0 }
    },
    A: {
        r10: { medal: 9000, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r100: { medal: 8750, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r1000: { medal: 8500, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r10000: { medal: 8250, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r100000: { medal: 8000, parts4: 0, parts3: 0, parts2: 0, parts1: 0 }
    },
    B: {
        r10: { medal: 7800, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r100: { medal: 7700, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r1000: { medal: 7600, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r10000: { medal: 7500, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r100000: { medal: 7400, parts4: 0, parts3: 0, parts2: 0, parts1: 0 }
    },
    C: {
        r10: { medal: 7300, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r100: { medal: 7200, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r1000: { medal: 7100, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r10000: { medal: 7000, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r100000: { medal: 6900, parts4: 0, parts3: 0, parts2: 0, parts1: 0 }
    },
    D: {
        r10: { medal: 6800, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r100: { medal: 6700, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r1000: { medal: 6600, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r10000: { medal: 6500, parts4: 0, parts3: 0, parts2: 0, parts1: 0 },
        r100000: { medal: 6400, parts4: 0, parts3: 0, parts2: 0, parts1: 0 }
    }
}
