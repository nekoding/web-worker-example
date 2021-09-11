const warna = [
    {
        name: "merah",
        code: "#FF0000"
    },
    {
        name: "biru",
        code: "#22577A"
    },
    {
        name: "hijau",
        code: "#00A19D"
    },
    {
        name: "kuning",
        code: "#FFB344"
    }
];

// setiap 2 detik beri warna random
setInterval(() => {

    const warnaRand = warna[Math.floor(Math.random() * warna.length)];

    postMessage(warnaRand);

}, 2000)