const hypersecretpassword = "dodoizcewl";
let userName = "%Placeholder%";

function welcome() {
  console.log("███████████████████████████████████████████████████");
  console.log("▓WELCOME TO ETAterminal!!!▓▓DO NOT ATTTEMPT TO USE▓");
  console.log("▓RUN runTerminal(<PASSWD>)▓▓USE ANY COMMANDS UNTIL▓");
  console.log("▓TO START UP A ETAterminal▓▓ETAterminal HAS BOOTED▓");
  console.log("▓█████████████████████████▓▓██████████████████████▓");
}

welcome();

function runTerminal(hypersecretpassword) {
  if (hypersecretpassword) {
    userName = prompt("ENTER A VALID USERNAME:");
    bootup();
  } else {
    console.log("████████████████");
    console.log("▓INCORRECT PSWD▓");
    console.log("▓PLEASE REFRESH▓");
    console.log("▓AND TRY AGAIN!▓");
    console.log("▓██████████████▓");
  }
}

function bootup() {
  setTimeout(() => {
    console.log("%cBIOS LOADING.", 'background-color: dodgerblue');
    setTimeout(() => {
      console.log("%cBIOS LOADING..", 'background-color: dodgerblue');
      setTimeout(() => {
        console.log("%cBIOS LOADING...", 'background-color: dodgerblue');
        setTimeout(() => {
          console.log("%cBIOS LOADED.", 'background-color: dodgerblue');
          setTimeout(() => {
            console.log("%cSTICHING ASSETS...", 'background-color: dodgerblue');
            setTimeout(() => {
              console.log("%cASSETS STICHED", 'background-color: dodgerblue');
              setTimeout(() => {
                console.log("%cCREATING CORE FILES...", 'background-color: dodgerblue');
                console.log("%cCREATED FILES", 'background-color: dodgerblue');
                setTimeout(() => {
                  console.log("%cLOADING SHELL...", 'background-color: dodgerblue');
                  console.log("%cLOADED SHELL", 'background-color: dodgerblue');
                  setTimeout(() => {
                    console.log("%cPRIMARY LOADUP COMPLETE", 'background-color: dodgerblue');
                    setTimeout(() => {
                      console.log("%c32x loaderBoot/", 'background-color: dodgerblue');
                      setTimeout(() => {
                        console.log("%c32x loaderBoot/main", 'background-color: dodgerblue');
                        setTimeout(() => {
                          console.log("%c32x loaderBoot/src/loader1", 'background-color: dodgerblue');
                          setTimeout(() => {
                            console.log("%c32x loaderBoot/src/loader2", 'background-color: dodgerblue');
                            console.log("%c64x loaderBoot/", 'background-color: dodgerblue');
                            setTimeout(() => {
                              console.log("%c64x loaderBoot/main", 'background-color: dodgerblue');
                              setTimeout(() => {
                                console.log("%c64x loaderBoot/src/loader1", 'background-color: dodgerblue');
                                setTimeout(() => {
                                  console.log("%c64x loaderBoot/src/loader2", 'background-color: dodgerblue');
                                  setTimeout(() => {
                                    console.log("%c9492-5742-4681-3750", 'background-color: dodgerblue');
                                    setTimeout(() => {
                                      console.log("%c5729-3752-6937-0193", 'background-color: dodgerblue');
                                      setTimeout(() => {
                                        console.log("%c1374-6729-8604-3841", 'background-color: dodgerblue');
                                        setTimeout(() => {
                                          console.log("%c6718-6730-9251", 'background-color: dodgerblue');
                                          setTimeout(() => {
                                            console.log("%c4702-9823-1356-7032-8051-0037", 'background-color: dodgerblue');
                                            setTimeout(() => {
                                              console.log("%c1508-2307-6531-3289-2076", 'background-color: dodgerblue');
                                              setTimeout(() => {
                                                console.log("%cLOADED EVERYTHING.", 'background-color: dodgerblue');
                                                setTimeout(() => {
                                                  const fakeIp1 = generateRandom(15)
                                                  const fakeIp2 = generateRandom(15)
                                                  console.log(
                                                    "IP FOR USER " +
                                                    userName +
                                                    " IS " +
                                                    fakeIp1
                                                  );
                                                  console.log(
                                                    "PUBLIC IP FOR USER " +
                                                    userName +
                                                    " IS " +
                                                    fakeIp2
                                                  );
                                                  setTimeout(() => {
                                                    console.clear();
                                                    startup();
                                                  }, 100);
                                                }, 100);
                                              }, 100);
                                            }, 75);
                                          }, 100);
                                        }, 100);
                                      }, 50);
                                    }, 100);
                                  }, 100);
                                }, 100);
                              }, 100);
                            }, 50);
                          }, 100);
                        }, 100);
                      }, 100);
                    }, 75);
                  }, 75);
                }, 100);
              }, 100);
            }, 100);
          }, 50);
        }, 100);
      }, 100);
    }, 50);
  }, 1);
}

function startup() {
  setTimeout(() => {
    console.log("%c[eta_00]", 'color: gray');
    setTimeout(() => {
      console.clear();
      console.log("[%c######%c]", 'color: yellow', '');
      console.log("%c[eta_01]", 'color: gray');
      setTimeout(() => {
        console.clear();
        console.log("[%c█#####%c]", 'color: yellow', '');
        console.log("%c[eta_02]", 'color: gray');
        setTimeout(() => {
          console.clear();
          console.log("[%c██####%c]", 'color: yellow', '');
          console.log("%c[eta_03]", 'color: gray');
          setTimeout(() => {
            console.clear();
            console.log("[%c███###%c]", 'color: yellow', '');
            console.log("%c[eta_04]", 'color: gray');
            setTimeout(() => {
              console.clear();
              console.log("[%c████##%c]", 'color: yellow', '');
              console.log("%c[eta_05]", 'color: gray');
              setTimeout(() => {
                console.clear();
                console.log("[%c█████#%c]", 'color: yellow', '');
                console.log("%c[eta_06]", 'color: gray');
                setTimeout(() => {
                  console.clear();
                  console.log("[%c██████%c]", 'color: yellow', '');
                  console.log("%c[eta_07]", 'color: gray');
                  setTimeout(() => {
                    console.clear();
                    console.log("%c▄██ %c! BOOT COMPLETE ! %c██▄", 'color: cyan', 'color: darkturquoise', 'color: cyan');
                    setTimeout(() => {
                      console.log("%c███████╗████████╗ █████╗", 'color: pink');
                      setTimeout(() => {
                        console.log("%c██╔════╝╚══██╔══╝██╔══██╗", 'color: pink');
                        setTimeout(() => {
                          console.log("%c█████╗     ██║   ███████║", 'color: pink');
                          setTimeout(() => {
                            console.log("%c██╔══╝     ██║   ██╔══██║", 'color: pink');
                            setTimeout(() => {
                              console.log("%c███████╗   ██║   ██║  ██║", 'color: pink');
                              setTimeout(() => {
                                console.log("%c╚══════╝   ╚═╝   ╚═╝  ╚═╝", 'color: pink');
                                setTimeout(() => {
                                  console.log("         %cᴛᴇʀᴍɪɴᴀʟ", 'color: hotpink');
                                  setTimeout(() => {
                                    console.log(`%c|—→ %cWELCOME, %c${userName}%c. HOSTIP IS ${fakeIp1}`, 'color: gray', 'color: lime', 'color: green', 'color: lime');
                                    console.log("%c|—→ %cUSE %cetutor();%c FOR HELP", 'color: gray', 'color: lime', 'color: green', 'color: lime');
                                  }, 500);
                                }, 250);
                              }, 50);
                            }, 50);
                          }, 50);
                        }, 50);
                      }, 50);
                    }, 1300);
                  }, 1750);
                }, 1750);
              }, 1750);
            }, 1750);
          }, 1750);
        }, 1750);
      }, 1750);
    }, 3000);
  }, 1);
}