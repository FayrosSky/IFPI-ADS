import curses

def main(stdscr):
    stdscr.clear()
    sh = 30
    sw = 90

    win = curses.newwin(sh + 1, sw + 1, 0, 0)
    win.border()
    win.keypad(True)  # Correção aqui
    win.timeout(100)
    while True:
        key = win.getch()
        if key == ord('q'):
            break

    # Implement the snake
    vib_x = int(sw / 4)
    vib_y = int(sh / 2)

    snk = [
        (vib_y, vib_x), 
        (vib_y, vib_x - 1), 
        (vib_y, vib_x - 2)
    ]

    # define our starting movement direction
    d = curses.KEY_RIGHT

    
    # This is the execution Loop that 
    # wil be running all the time our screen is active meaning
    # while the game is running
    while True:

        # define a new head of the snake
        nhead = None

        # check for collisions to wall
        if snk[0][0] in (0, sh) or snk[0][1] in (0, sw):
            # We crashed
            curses.endwin()
            print("GAME OVER")
            quit()

        key = win.getch()
        if key == -1:
            #no change in direction required  
            d = d
        else:
            d = key

        if key == ord('q'):
            break
        if d == curses.KEY_RIGHT or d == 454:
            nhead = (snk[0][0], snk[0][1] + 1)
        elif d == curses.KEY_LEFT or d == 452:
            nhead = (snk[0][0], snk[0][1] + 1)
        elif d == curses.KEY_UP or d == 450:
            nhead = (snk[0][0] - 1, snk[0][1])
        elif d == curses.KEY_DOWN or  d == 456:
            nhead = (snk[0][0] + 1, snk[0][1])
            
        snk.insert(0, nhead)
        tail = snk.pop()

        # Erase the tail from the screen
        win.addch(tail[0], tail[1], " ")

        # now we can draw the new head
        win.addch(nhead[0], nhead[1], curses.ACS_BLOCK)

curses.wrapper(main)
