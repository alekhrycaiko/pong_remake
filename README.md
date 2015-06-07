# pong_remake
The game is a simple Pong clone developed with JavaScript in Unity 5.

I originally made this program in Unity 4, but lost my data due to a formatting issue. Fortunately Unity 5 is out and I got to
remake the game and learn about some of the changes :)

My version of this game has some of the features from the original game, but I plan to add more features in the future.

Current features (updated 6/7/2015):
- One - Two players can play
- Ball physics should function as intended (very simply).
- Some neato colors are used.
- Ball auto-starts
- An AI was programmed that follows a 'target' tag. The tag was applied to the ball. The AI should follow the balls x coordinate at a relative speed that's controlled by a global constant. (recent update)
- Following the AI incorporation, two game modes resulted: "1 versus 1" and "versus AI". 
- A main menu was programmed in that features clickable buttons that send you to your desired game. An exit button was also provided. Note: exit button was not testable in editor - according to Unity documentation.

Future plans to the project:
- Priority one is dealing with ball handling differently. Bouncing balls based on speed/angles needs to be accounted for.
- I'd like to re-spawn the ball after someone wins. Currently this is a BO1('best of one') Pong game.
- If the above feature is added, a scoreboard should also be incorporated.
- Add a MouseEvent to start the game, rather than an auto-start occurring. 

