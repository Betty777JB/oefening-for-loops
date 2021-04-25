function assignGrade(score) {
    if (score > 90) {
        return 'A';
    } else if (score > 80) {
        return 'B';
    } else if (score > 70) {
        return 'C';
    } else if (score > 65) {
        return 'D';
    } else {
        return 'E';
    }
}
// N.B. voor 60 punten krijg je geen F (zoals de opdracht zegt) maar een E


for (var score2 = 60; score2 <= 100; score2++) {
    console.log(`Voor ${score2} punten, krijg je een ${assignGrade(score2)}`);
}
