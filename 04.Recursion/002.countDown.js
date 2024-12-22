function countDown(n) {
    if (n <= 0) {
        console.log("All Done !");
        return;
    }
    console.log(n);
    n--;
    countDown(n);
}