// morning-physical-activities.js
const morningPhysicalActivities = [
  {
    "title": "Animal Walk Parade",
    "difficulty": "Easy",
    "category": "Movement",
    "procedure": [
      "Ask both children to pretend to be animals.",
      "Example: hop like bunnies, waddle like ducks, stomp like elephants.",
      "Do each animal movement for 2 minutes, then switch to a new one."
    ],
    "benefits": "Improves motor coordination, imagination, and social play.",
    "materials": "None"
  },
  {
    "title": "Balloon Tap",
    "difficulty": "Easy",
    "category": "Hand-Eye Coordination",
    "procedure": [
      "Blow up 2 balloons and give one to each child.",
      "Tell them to keep their balloon in the air by tapping it with hands.",
      "Count how many taps they can do before the balloon touches the ground."
    ],
    "benefits": "Enhances balance, focus, and cooperation.",
    "materials": "2 balloons (one for each child)"
  },
  {
    "title": "Follow the Leader Stretches",
    "difficulty": "Easy",
    "category": "Stretching",
    "procedure": [
      "Parent shows a simple stretch, like reaching arms up or touching toes.",
      "Both children copy the stretch.",
      "Do 5–6 different stretches slowly together."
    ],
    "benefits": "Improves flexibility and listening skills.",
    "materials": "None"
  },
  {
    "title": "Marching Band",
    "difficulty": "Easy",
    "category": "Cardio",
    "procedure": [
      "Parent claps hands slowly like a drumbeat: clap… clap… clap.",
      "Children march around the room, moving their feet in rhythm with the claps.",
      "Make it fun by trying slow claps (slow march) and fast claps (fast march)."
    ],
    "benefits": "Boosts rhythm sense and stamina.",
    "materials": "None"
  },
  {
    "title": "Pillow Jumps",
    "difficulty": "Easy",
    "category": "Balance",
    "procedure": [
      "Place 4 pillows on the floor as stepping stones.",
      "Ask each child to jump from one pillow to the next.",
      "Make the pillows a little farther apart if safe, to make it more fun."
    ],
    "benefits": "Develops leg strength and coordination.",
    "materials": "4 pillows (2 each)"
  },
  {
    "title": "Color Run",
    "difficulty": "Easy",
    "category": "Movement & Learning",
    "procedure": [
      "Place 6 colored objects (like red cups, blue blocks, yellow spoons) around the room.",
      "Call out a color, and both children run to touch that colored object.",
      "Make sure each child has their own object of that color."
    ],
    "benefits": "Combines physical play with color recognition.",
    "materials": "6 colored household objects (2 per child)"
  },
  {
    "title": "Freeze Dance",
    "difficulty": "Easy",
    "category": "Dance",
    "procedure": [
      "Play music and let both children dance freely.",
      "Pause the music suddenly.",
      "When music stops, they must freeze like statues until the music starts again."
    ],
    "benefits": "Improves self-control and body awareness.",
    "materials": "Music player"
  },
  {
    "title": "Hopscotch Mini",
    "difficulty": "Medium",
    "category": "Jumping",
    "procedure": [
      "Use masking tape on the floor to make 2 hopscotch grids side by side.",
      "Each child hops on their own grid, one square at a time.",
      "Encourage them to try hopping with one leg for more fun."
    ],
    "benefits": "Improves balance and gross motor skills.",
    "materials": "Masking tape (enough for 2 grids)"
  },
  {
    "title": "Toy Pick Relay",
    "difficulty": "Easy",
    "category": "Active Cleanup",
    "procedure": [
      "Scatter 10 toys across the room.",
      "Place a basket at one side of the room.",
      "Each child runs to pick one toy and drops it into the basket. Repeat until all toys are collected."
    ],
    "benefits": "Encourages movement, teamwork, and responsibility.",
    "materials": "10 toys and 1 basket (shared)"
  },
  {
    "title": "Tiptoe Balance",
    "difficulty": "Easy",
    "category": "Balance",
    "procedure": [
      "Ask both children to walk across the room on tiptoes like sneaky cats.",
      "Challenge them to hold hands while tiptoeing together.",
      "Repeat 2–3 times."
    ],
    "benefits": "Strengthens calf muscles and balance.",
    "materials": "None"
  },
  {
    "title": "Rolling Log",
    "difficulty": "Easy",
    "category": "Core Strength",
    "procedure": [
      "Spread 2 mats or blankets on the floor.",
      "Each child lies flat on their back and rolls sideways across their mat like a log.",
      "Encourage rolling in both directions."
    ],
    "benefits": "Strengthens core and body awareness.",
    "materials": "2 mats or blankets (1 each)"
  },
  {
    "title": "Star Jumps",
    "difficulty": "Medium",
    "category": "Cardio",
    "procedure": [
      "Both children stand side by side.",
      "They jump while spreading arms and legs wide like a star.",
      "Do 10 jumps together, then take a short break."
    ],
    "benefits": "Improves stamina and coordination.",
    "materials": "None"
  },
  {
    "title": "Obstacle Crawl",
    "difficulty": "Medium",
    "category": "Adventure",
    "procedure": [
      "Arrange chairs or cushions to form 2 tunnels side by side.",
      "Each child crawls through their own tunnel.",
      "Time them for fun and see who finishes first."
    ],
    "benefits": "Builds agility and strength.",
    "materials": "Chairs or cushions (enough for 2 tunnels)"
  },
  {
    "title": "Mirror Movements",
    "difficulty": "Easy",
    "category": "Imitation Game",
    "procedure": [
      "Parent does a simple action like clapping hands, jumping, or waving arms.",
      "Both children must copy the action immediately like mirrors.",
      "Let one child be the leader for a round and the other copies."
    ],
    "benefits": "Enhances observation, teamwork, and motor imitation.",
    "materials": "None"
  },
  {
    "title": "Sock Toss",
    "difficulty": "Easy",
    "category": "Hand-Eye Coordination",
    "procedure": [
      "Roll 4 socks into soft balls.",
      "Place 2 baskets at equal distance.",
      "Each child tosses socks into their own basket one by one."
    ],
    "benefits": "Improves aim, coordination, and confidence.",
    "materials": "4 rolled socks and 2 baskets"
  },
  {
    "title": "Shadow Jump",
    "difficulty": "Easy",
    "category": "Outdoor Fun",
    "procedure": [
      "Go outside on a sunny day.",
      "Ask each child to try and jump on the other’s shadow playfully.",
      "Take turns and laugh together."
    ],
    "benefits": "Encourages outdoor play and awareness.",
    "materials": "Sunlight"
  },
  {
    "title": "Dance with Scarves",
    "difficulty": "Easy",
    "category": "Creative Dance",
    "procedure": [
      "Give each child a light scarf or cloth piece.",
      "Play music and let them twirl the scarves in the air as they dance.",
      "End with both throwing scarves up and catching them."
    ],
    "benefits": "Boosts creativity and motor control.",
    "materials": "2 scarves (1 each)"
  },
  {
    "title": "Mini Yoga Poses",
    "difficulty": "Easy",
    "category": "Yoga",
    "procedure": [
      "Show them simple poses: Tree (stand on one leg), Cat-Cow (on all fours).",
      "Both children copy the poses together.",
      "Hold each pose for 10 seconds, then relax. Repeat 2 times."
    ],
    "benefits": "Enhances flexibility, balance, and calmness.",
    "materials": "2 mats (optional, 1 each)"
  },
  {
    "title": "Tunnel Crawl",
    "difficulty": "Easy",
    "category": "Crawling",
    "procedure": [
      "Drape 2 blankets over chairs to make tunnels.",
      "Each child crawls through their own tunnel from one side to the other.",
      "Cheer for them as they finish."
    ],
    "benefits": "Strengthens arms and coordination.",
    "materials": "2 blankets and chairs"
  },
  {
    "title": "Skipping with Rope (Assisted)",
    "difficulty": "Medium",
    "category": "Jump Rope",
    "procedure": [
      "Parent holds 2 ropes low to the ground.",
      "Each child jumps over their own rope as the parent moves it slowly.",
      "Gradually lift the ropes slightly higher for challenge."
    ],
    "benefits": "Improves timing and jumping skills.",
    "materials": "2 ropes (1 each)"
  },
  {
    "title": "Cushion Hops",
    "difficulty": "Easy",
    "category": "Jumping",
    "procedure": [
      "Arrange 6 cushions in a row on the floor (3 for each child).",
      "Children hop from one cushion to another on their own row.",
      "Change the distance between cushions slightly each round."
    ],
    "benefits": "Enhances balance and agility.",
    "materials": "6 cushions (3 each)"
  },
  {
    "title": "Windmill Arms",
    "difficulty": "Easy",
    "category": "Stretching",
    "procedure": [
      "Both children stand with feet apart.",
      "Swing arms in big circles like windmills — forward first, then backward.",
      "Do 5 circles each way."
    ],
    "benefits": "Strengthens shoulders and improves flexibility.",
    "materials": "None"
  },
  {
    "title": "Run and Stop",
    "difficulty": "Easy",
    "category": "Running Game",
    "procedure": [
      "Ask both children to run around the room.",
      "Parent calls 'Stop!' suddenly, and they must freeze.",
      "Say 'Go!' to let them run again. Repeat several times."
    ],
    "benefits": "Teaches listening, control, and cooperation.",
    "materials": "None"
  },
  {
    "title": "Paper Airplane Chase",
    "difficulty": "Easy",
    "category": "Active Play",
    "procedure": [
      "Fold 2 simple paper airplanes and give one to each child.",
      "Throw both airplanes gently across the room.",
      "Children run to chase and bring back their airplanes."
    ],
    "benefits": "Boosts running, excitement, and focus.",
    "materials": "2 paper airplanes (1 each)"
  },
  {
    "title": "Pretend Cycling",
    "difficulty": "Easy",
    "category": "Core Play",
    "procedure": [
      "Each child lies on their back on the floor or mat.",
      "They move their legs in the air like pedaling a bicycle.",
      "Do it for 1 minute, rest, then repeat 2 more times."
    ],
    "benefits": "Strengthens core and leg muscles.",
    "materials": "2 mats (optional, 1 each)"
  },
  {
    "title": "Animal Jump Squares",
    "difficulty": "Easy",
    "category": "Jumping",
    "procedure": [
      "Use masking tape to make 4 squares on the floor.",
      "Children jump from square to square like frogs or kangaroos.",
      "Do 5–6 rounds each."
    ],
    "benefits": "Improves leg strength and coordination.",
    "materials": "Masking tape (for 2 sets of squares)"
  },
  {
    "title": "Mini Soccer Kick",
    "difficulty": "Easy",
    "category": "Ball Games",
    "procedure": [
      "Use a soft ball and 2 small goals (or baskets).",
      "Each child tries to kick the ball into their goal.",
      "Take turns and cheer together."
    ],
    "benefits": "Builds coordination, aiming, and teamwork.",
    "materials": "1 soft ball + 2 baskets/goals"
  },
  {
    "title": "Crawl Under Rope",
    "difficulty": "Easy",
    "category": "Agility",
    "procedure": [
      "Tie 2 ropes horizontally across chairs low enough to crawl under.",
      "Each child crawls under their rope without touching it.",
      "Repeat 2–3 times."
    ],
    "benefits": "Improves core strength and flexibility.",
    "materials": "2 ropes and chairs"
  },
  {
    "title": "Balance Beam Walk",
    "difficulty": "Easy",
    "category": "Balance",
    "procedure": [
      "Use a long strip of tape or plank on the floor.",
      "Children walk carefully across it without stepping off.",
      "Challenge by walking forward and backward."
    ],
    "benefits": "Enhances balance and focus.",
    "materials": "Tape or a safe plank (2 tracks side by side)"
  },
  {
    "title": "Ball Roll Target",
    "difficulty": "Easy",
    "category": "Hand-Eye Coordination",
    "procedure": [
      "Place 2 baskets a short distance apart.",
      "Each child rolls a soft ball aiming to land it inside their basket.",
      "Try multiple rounds and celebrate points."
    ],
    "benefits": "Improves aiming, coordination, and counting skills.",
    "materials": "2 soft balls + 2 baskets"
  },
  {
    "title": "Crawl Like a Bear",
    "difficulty": "Easy",
    "category": "Strength",
    "procedure": [
      "Children get on hands and feet, tummy down.",
      "Move forward like a bear crawling across the room.",
      "Do it for 1–2 minutes with breaks."
    ],
    "benefits": "Strengthens arms, legs, and core.",
    "materials": "None"
  },
  {
    "title": "Tug of Cloth",
    "difficulty": "Medium",
    "category": "Strength",
    "procedure": [
      "Use 1 long scarf or cloth for each child.",
      "They hold ends and gently pull, keeping balance.",
      "Parent supervises to avoid rough pull."
    ],
    "benefits": "Develops grip strength and teamwork.",
    "materials": "2 scarves or cloth strips (1 each)"
  },
  {
    "title": "Step Ladder Hop",
    "difficulty": "Medium",
    "category": "Jumping",
    "procedure": [
      "Draw 4–5 ladder lines with tape on the floor.",
      "Children hop forward into each square using both feet.",
      "Do side-to-side hops for extra challenge."
    ],
    "benefits": "Improves agility, balance, and leg strength.",
    "materials": "Masking tape (enough for 2 ladders)"
  },
  {
    "title": "Cushion Tunnel Crawl",
    "difficulty": "Easy",
    "category": "Crawling",
    "procedure": [
      "Line up 2 cushions to create a short tunnel.",
      "Children crawl under the cushions one by one.",
      "Cheer each completion."
    ],
    "benefits": "Enhances crawling skills and spatial awareness.",
    "materials": "4 cushions (2 per child)"
  },
  {
    "title": "Hop Balloon Race",
    "difficulty": "Easy",
    "category": "Coordination",
    "procedure": [
      "Blow up 2 balloons.",
      "Children hold balloon between knees and hop from start to finish.",
      "First to reach without dropping wins."
    ],
    "benefits": "Improves coordination and leg strength.",
    "materials": "2 balloons"
  },
  {
    "title": "Mini Obstacle Course",
    "difficulty": "Medium",
    "category": "Mixed Activity",
    "procedure": [
      "Set up 2 small courses with cushions, ropes, and chairs.",
      "Each child goes through their course crawling, jumping, and balancing.",
      "Time them for fun but focus on safe movement."
    ],
    "benefits": "Develops agility, coordination, and confidence.",
    "materials": "Cushions, ropes, chairs (2 sets)"
  },
  {
    "title": "Animal Freeze",
    "difficulty": "Easy",
    "category": "Creative Movement",
    "procedure": [
      "Children move around like their favorite animal.",
      "Parent shouts 'Freeze!' and they hold their animal pose for 5 seconds.",
      "Repeat 5 times."
    ],
    "benefits": "Builds imagination, self-control, and balance.",
    "materials": "None"
  },
  {
    "title": "Balloon Kick Challenge",
    "difficulty": "Easy",
    "category": "Leg Coordination",
    "procedure": [
      "Blow up 2 balloons.",
      "Children try to kick the balloon into the air without letting it touch the floor.",
      "Count consecutive kicks."
    ],
    "benefits": "Strengthens legs and improves coordination.",
    "materials": "2 balloons (1 each)"
  },
  {
    "title": "Crawl & Carry",
    "difficulty": "Medium",
    "category": "Strength",
    "procedure": [
      "Children crawl on the floor carrying a soft toy from start to finish.",
      "Ensure toys are light and safe.",
      "Time them for fun."
    ],
    "benefits": "Improves core strength and coordination.",
    "materials": "2 soft toys (1 each)"
  },
  {
    "title": "Jump Over Rope",
    "difficulty": "Medium",
    "category": "Jumping",
    "procedure": [
      "Place 2 ropes on the floor for each child.",
      "Children jump over their rope with both feet together.",
      "Repeat several times, adjusting distance for challenge."
    ],
    "benefits": "Strengthens legs and improves jumping skills.",
    "materials": "2 ropes (1 each)"
  },
  {
    "title": "Balancing Book",
    "difficulty": "Medium",
    "category": "Balance",
    "procedure": [
      "Children balance a small book on their head while walking.",
      "Walk straight line or around a small obstacle.",
      "Focus on posture and fun."
    ],
    "benefits": "Improves posture, balance, and focus.",
    "materials": "2 small books (1 each)"
  },
  {
    "title": "Crab Walk Race",
    "difficulty": "Medium",
    "category": "Strength",
    "procedure": [
      "Children sit on the floor, lift their body using hands and feet, tummy facing up.",
      "Move forward like crabs to finish line.",
      "Cheer for speed and form."
    ],
    "benefits": "Strengthens arms, legs, and core.",
    "materials": "None"
  },
  {
    "title": "Mini Hurdles",
    "difficulty": "Medium",
    "category": "Jumping",
    "procedure": [
      "Use 2 small cushions for each child as hurdles.",
      "Children jump over them one by one.",
      "Do 2–3 rounds for fun."
    ],
    "benefits": "Develops leg strength and coordination.",
    "materials": "4 cushions (2 per child)"
  },
  {
    "title": "Rolling Ball Crawl",
    "difficulty": "Medium",
    "category": "Coordination",
    "procedure": [
      "Children crawl while pushing a soft ball with hands.",
      "Do it across a short distance.",
      "Encourage gentle speed for safety."
    ],
    "benefits": "Enhances core strength and hand-eye coordination.",
    "materials": "2 soft balls (1 each)"
  },
  {
    "title": "Jump & Clap",
    "difficulty": "Easy",
    "category": "Cardio",
    "procedure": [
      "Children jump up and clap their hands above their head.",
      "Repeat 10 times, then rest.",
      "Do 2–3 rounds."
    ],
    "benefits": "Builds stamina, coordination, and fun."
  },
  {
    "title": "Scarf Twirl",
    "difficulty": "Easy",
    "category": "Creative Dance",
    "procedure": [
      "Give each child a scarf.",
      "Play music and let them twirl and move with the scarf.",
      "Encourage flowing movements and waving high."
    ],
    "benefits": "Improves creativity, coordination, and rhythm.",
    "materials": "2 scarves (1 each)"
  },
  {
    "title": "Hop Animal Relay",
    "difficulty": "Medium",
    "category": "Movement",
    "procedure": [
      "Set 2 start and finish lines.",
      "Children hop like bunnies from start to finish.",
      "Switch animals after each round."
    ],
    "benefits": "Improves leg strength, imagination, and endurance.",
    "materials": "None"
  },
  {
    "title": "Step & Clap",
    "difficulty": "Easy",
    "category": "Coordination",
    "procedure": [
      "Children step forward and backward while clapping hands.",
      "Do 10 steps forward and back, repeat 2 rounds.",
      "Try slow and fast tempos."
    ],
    "benefits": "Improves coordination and rhythm.",
    "materials": "None"
  },
  {
    "title": "Balloon Crawl",
    "difficulty": "Medium",
    "category": "Agility",
    "procedure": [
      "Children crawl under a stretched balloon (or lightweight rope) without touching it.",
      "Repeat 2–3 times.",
      "Parent ensures safety and proper spacing."
    ],
    "benefits": "Builds core strength and body awareness.",
    "materials": "2 balloons or ropes (1 each)"
  },
  {
    "title": "Mini Jump Circuit",
    "difficulty": "Medium",
    "category": "Cardio",
    "procedure": [
      "Create a short circuit: hop over cushions, crawl under a rope, balance on tape line.",
      "Children complete the circuit side by side.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Enhances stamina, coordination, and fun.",
    "materials": "Cushions, rope, tape line (2 sets)"
  },
  {
    "title": "Cushion Step Ladder",
    "difficulty": "Medium",
    "category": "Jumping",
    "procedure": [
      "Place 6 cushions in a straight line for each child.",
      "Children step or jump from one cushion to the next without touching the floor.",
      "Repeat the sequence 2–3 times."
    ],
    "benefits": "Improves coordination, leg strength, and balance.",
    "materials": "6 cushions (3 per child)"
  },
  {
    "title": "Bear Crawl Relay",
    "difficulty": "Medium",
    "category": "Strength",
    "procedure": [
      "Children get on hands and feet, tummy facing down, crawling like bears.",
      "Race from start to finish line safely.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Strengthens arms, legs, and core muscles.",
    "materials": "None"
  },
  {
    "title": "Balloon Keep Up",
    "difficulty": "Easy",
    "category": "Hand-Eye Coordination",
    "procedure": [
      "Blow up 2 balloons, one for each child.",
      "Children keep the balloon in the air using hands only, trying not to drop it.",
      "Count the number of hits for fun."
    ],
    "benefits": "Enhances focus, coordination, and patience.",
    "materials": "2 balloons"
  },
  {
    "title": "Tunnel Crawl Under Blanket",
    "difficulty": "Easy",
    "category": "Crawling",
    "procedure": [
      "Drape 2 blankets over chairs to make tunnels.",
      "Children crawl through their own tunnel one at a time.",
      "Cheer them on after completion."
    ],
    "benefits": "Improves agility and spatial awareness.",
    "materials": "2 blankets, chairs (1 each child)"
  },
  {
    "title": "March Like Soldiers",
    "difficulty": "Easy",
    "category": "Movement",
    "procedure": [
      "Children march in place or around a room lifting knees high.",
      "Add arm swings to increase coordination.",
      "Do 1–2 minutes, then rest."
    ],
    "benefits": "Builds stamina, posture, and rhythm.",
    "materials": "None"
  },
  {
    "title": "Stepping Stones",
    "difficulty": "Easy",
    "category": "Balance",
    "procedure": [
      "Place 5 cushions for each child as stepping stones.",
      "Children step or hop across without touching the floor.",
      "Change the arrangement for variety."
    ],
    "benefits": "Improves balance and agility.",
    "materials": "10 cushions (5 per child)"
  },
  {
    "title": "Crab Walk Obstacle",
    "difficulty": "Medium",
    "category": "Strength & Agility",
    "procedure": [
      "Children do crab walk around a short obstacle course.",
      "Use cushions or chairs as obstacles to navigate around.",
      "Do 2–3 rounds."
    ],
    "benefits": "Strengthens core, arms, and coordination.",
    "materials": "Cushions or chairs (shared)"
  },
  {
    "title": "Jumping Jacks Fun",
    "difficulty": "Medium",
    "category": "Cardio",
    "procedure": [
      "Children do 10–15 jumping jacks slowly, then fast.",
      "Rest for 30 seconds and repeat 2 rounds.",
      "Encourage them to coordinate arms and legs."
    ],
    "benefits": "Improves cardiovascular endurance and coordination.",
    "materials": "None"
  },
  {
    "title": "Animal Pose Freeze",
    "difficulty": "Easy",
    "category": "Creative Movement",
    "procedure": [
      "Children move around imitating an animal.",
      "Parent shouts 'Freeze!' and they hold the pose for 5 seconds.",
      "Repeat with 3–4 animals."
    ],
    "benefits": "Enhances creativity, balance, and body control.",
    "materials": "None"
  },
  {
    "title": "Ball Roll Relay",
    "difficulty": "Medium",
    "category": "Hand-Eye Coordination",
    "procedure": [
      "Place 2 soft balls on the floor for each child.",
      "Children push the ball across a distance with hands or feet.",
      "Time for fun but focus on safe movement."
    ],
    "benefits": "Improves coordination, timing, and focus.",
    "materials": "2 soft balls (1 each child)"
  },
  {
    "title": "Mini Hopscotch",
    "difficulty": "Medium",
    "category": "Jumping & Balance",
    "procedure": [
      "Use masking tape to make 2 hopscotch grids.",
      "Children hop through each grid using one or two feet.",
      "Repeat 2–3 times."
    ],
    "benefits": "Enhances coordination, balance, and leg strength.",
    "materials": "Masking tape for 2 grids"
  },
  {
    "title": "Ball Toss Into Basket",
    "difficulty": "Easy",
    "category": "Hand-Eye Coordination",
    "procedure": [
      "Children take turns tossing soft balls into a basket.",
      "Each child has their own ball and basket.",
      "Count successful throws for fun."
    ],
    "benefits": "Improves aim, coordination, and focus.",
    "materials": "2 soft balls + 2 baskets"
  },
  {
    "title": "Hop Balloon Challenge",
    "difficulty": "Easy",
    "category": "Jumping",
    "procedure": [
      "Blow up 2 balloons.",
      "Children hold balloon between knees and hop from start to finish.",
      "Ensure they don’t drop it."
    ],
    "benefits": "Improves leg strength and coordination.",
    "materials": "2 balloons"
  },
  {
    "title": "Balance Beam Tape",
    "difficulty": "Medium",
    "category": "Balance",
    "procedure": [
      "Use masking tape on the floor as a balance beam for each child.",
      "Children walk forward and backward, keeping balance.",
      "Do 2–3 rounds."
    ],
    "benefits": "Enhances balance, focus, and coordination.",
    "materials": "Masking tape (2 strips)"
  },
  {
    "title": "Scarf Dance",
    "difficulty": "Easy",
    "category": "Creative Dance",
    "procedure": [
      "Give each child a scarf.",
      "Play music and let them move the scarf freely with arms and body.",
      "Encourage twirling and waving."
    ],
    "benefits": "Improves creativity, coordination, and rhythm.",
    "materials": "2 scarves"
  },
  {
    "title": "Step and Clap Circuit",
    "difficulty": "Easy",
    "category": "Coordination",
    "procedure": [
      "Create a short circuit: step forward, backward, and sideways.",
      "Children clap hands after each step.",
      "Repeat 2 rounds."
    ],
    "benefits": "Enhances coordination, rhythm, and focus.",
    "materials": "None"
  },
  {
    "title": "Mini Obstacle Crawl",
    "difficulty": "Medium",
    "category": "Agility",
    "procedure": [
      "Arrange cushions, ropes, or chairs to create a mini obstacle course.",
      "Children crawl under, hop over, and move around safely.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Improves agility, coordination, and problem-solving.",
    "materials": "Cushions, ropes, chairs (2 sets)"
  },
  {
    "title": "Animal Hop Relay",
    "difficulty": "Medium",
    "category": "Movement & Fun",
    "procedure": [
      "Children hop like different animals from start to finish.",
      "Switch animals after each round.",
      "Repeat 2–3 times."
    ],
    "benefits": "Improves leg strength, endurance, and imagination.",
    "materials": "None"
  },
  {
    "title": "Crab Walk Maze",
    "difficulty": "Medium",
    "category": "Strength & Agility",
    "procedure": [
      "Create a short maze using cushions or chairs.",
      "Children do crab walk to navigate through the maze.",
      "Cheer and guide for safety."
    ],
    "benefits": "Strengthens arms, legs, core, and coordination.",
    "materials": "Cushions or chairs (2 sets)"
  },
  {
    "title": "Jump Over Cushion Line",
    "difficulty": "Medium",
    "category": "Jumping",
    "procedure": [
      "Place 3–4 cushions in a straight line for each child.",
      "Children jump over each cushion with both feet.",
      "Repeat 2 rounds."
    ],
    "benefits": "Enhances leg strength, balance, and coordination.",
    "materials": "6–8 cushions (3–4 per child)"
  },
  {
    "title": "Rolling Ball Push",
    "difficulty": "Medium",
    "category": "Strength & Coordination",
    "procedure": [
      "Children crawl or walk while pushing a soft ball along a path.",
      "Encourage gentle movement for safety.",
      "Do 2–3 rounds."
    ],
    "benefits": "Improves core strength and hand-eye coordination.",
    "materials": "2 soft balls"
  },
  {
    "title": "Hop & Freeze",
    "difficulty": "Easy",
    "category": "Movement & Self-Control",
    "procedure": [
      "Children hop around the room freely.",
      "Parent calls 'Freeze!' and they stop immediately.",
      "Repeat several times."
    ],
    "benefits": "Enhances balance, listening skills, and fun.",
    "materials": "None"
  },
  {
    "title": "Step and Reach",
    "difficulty": "Easy",
    "category": "Stretching",
    "procedure": [
      "Children step forward or sideways while reaching arms up or to sides.",
      "Do 5 steps in each direction.",
      "Repeat 2 rounds."
    ],
    "benefits": "Improves flexibility, balance, and coordination.",
    "materials": "None"
  },
  {
    "title": "Ball Toss Relay",
    "difficulty": "Easy",
    "category": "Hand-Eye Coordination",
    "procedure": [
      "Children pass a soft ball back and forth while walking.",
      "Each child has their own ball for relay races.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Improves coordination, focus, and teamwork.",
    "materials": "2 soft balls"
  },
  {
    "title": "Cushion Jump Circuit",
    "difficulty": "Medium",
    "category": "Jumping & Agility",
    "procedure": [
      "Create a circuit of 3–4 cushions per child.",
      "Children jump forward, sideways, and over cushions safely.",
      "Repeat 2 rounds."
    ],
    "benefits": "Enhances balance, coordination, and leg strength.",
    "materials": "6–8 cushions (3–4 per child)"
  },
  {
    "title": "Bear Crawl Obstacle",
    "difficulty": "Medium",
    "category": "Strength",
    "procedure": [
      "Set up a short obstacle course using cushions or chairs.",
      "Children bear crawl through the course.",
      "Repeat 2–3 rounds with guidance."
    ],
    "benefits": "Strengthens arms, core, and coordination.",
    "materials": "Cushions or chairs (2 sets)"
  },
  {
    "title": "Step Ladder Hop",
    "difficulty": "Medium",
    "category": "Jumping",
    "procedure": [
      "Use masking tape to create a step ladder on the floor for each child.",
      "Children hop from one square to another using both feet.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Improves agility, coordination, and leg strength.",
    "materials": "Masking tape (2 ladders)"
  },
  {
    "title": "Mini Tunnel Crawl",
    "difficulty": "Easy",
    "category": "Crawling",
    "procedure": [
      "Drape 2 blankets over chairs to form tunnels.",
      "Children crawl through their tunnels safely.",
      "Cheer after completion."
    ],
    "benefits": "Enhances agility and spatial awareness.",
    "materials": "2 blankets, chairs"
  },
  {
    "title": "Scarf Twirl Dance",
    "difficulty": "Easy",
    "category": "Creative Movement",
    "procedure": [
      "Give each child a scarf.",
      "Play music and encourage them to twirl, wave, and move freely with the scarf.",
      "Repeat for 5 minutes."
    ],
    "benefits": "Develops creativity, rhythm, and coordination.",
    "materials": "2 scarves"
  },
  {
    "title": "Jump Balloon Race",
    "difficulty": "Easy",
    "category": "Jumping",
    "procedure": [
      "Blow up 2 balloons.",
      "Children hop while holding balloon between knees.",
      "Race from start to finish."
    ],
    "benefits": "Strengthens legs and improves coordination.",
    "materials": "2 balloons"
  },
  {
    "title": "Balance Book Walk",
    "difficulty": "Medium",
    "category": "Balance",
    "procedure": [
      "Children balance a small book on their head while walking on a taped line.",
      "Walk forward and backward.",
      "Repeat 2 rounds."
    ],
    "benefits": "Enhances balance, posture, and focus.",
    "materials": "2 small books, masking tape"
  },
  {
    "title": "Mini Obstacle Hop",
    "difficulty": "Medium",
    "category": "Agility",
    "procedure": [
      "Set up 3–4 obstacles (cushions, ropes, low chairs).",
      "Children hop over and crawl under obstacles safely.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Improves agility, coordination, and endurance.",
    "materials": "Cushions, ropes, chairs (2 sets)"
  },
  {
    "title": "Animal Hop Relay Fun",
    "difficulty": "Medium",
    "category": "Movement & Imagination",
    "procedure": [
      "Children hop like different animals across a line.",
      "Change animals after each round.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Improves leg strength, endurance, and creativity.",
    "materials": "None"
  },
  {
    "title": "Crab Crawl Maze Challenge",
    "difficulty": "Medium",
    "category": "Strength & Agility",
    "procedure": [
      "Create a short maze using cushions or chairs.",
      "Children crab crawl through the maze.",
      "Cheer and guide for safety."
    ],
    "benefits": "Strengthens arms, core, and coordination.",
    "materials": "Cushions or chairs (2 sets)"
  },
  {
    "title": "Jump Over Cushion Line 2",
    "difficulty": "Medium",
    "category": "Jumping",
    "procedure": [
      "Place 3–4 cushions in a straight line per child.",
      "Children jump over each cushion with both feet.",
      "Repeat 2 rounds."
    ],
    "benefits": "Enhances leg strength, balance, and coordination.",
    "materials": "6–8 cushions (3–4 per child)"
  },
  {
    "title": "Rolling Ball Crawl Fun",
    "difficulty": "Medium",
    "category": "Coordination",
    "procedure": [
      "Children crawl while pushing a soft ball along a short path.",
      "Do 2–3 rounds safely.",
      "Parent ensures correct form."
    ],
    "benefits": "Enhances core strength and hand-eye coordination.",
    "materials": "2 soft balls"
  },
  {
    "title": "Tunnel Crawl Adventure",
    "difficulty": "Easy",
    "category": "Crawling",
    "procedure": [
      "Drape 2 blankets over chairs to make tunnels.",
      "Children crawl through their tunnels one by one.",
      "Cheer after completion."
    ],
    "benefits": "Improves agility and spatial awareness.",
    "materials": "2 blankets, chairs"
  },
  {
    "title": "Balloon Tap Challenge",
    "difficulty": "Easy",
    "category": "Hand-Eye Coordination",
    "procedure": [
      "Blow up 2 balloons, one for each child.",
      "Children tap the balloon in the air without letting it touch the floor.",
      "Count taps for fun."
    ],
    "benefits": "Enhances focus, coordination, and fun.",
    "materials": "2 balloons"
  },
  {
    "title": "Cushion Jump Path",
    "difficulty": "Medium",
    "category": "Jumping",
    "procedure": [
      "Arrange 5 cushions in a line for each child.",
      "Children hop from one cushion to the next safely.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Improves leg strength, balance, and coordination.",
    "materials": "10 cushions (5 per child)"
  },
  {
    "title": "Bear Crawl Challenge",
    "difficulty": "Medium",
    "category": "Strength",
    "procedure": [
      "Children get on hands and feet, tummy facing down, and crawl like bears.",
      "Race from start to finish safely.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Strengthens arms, core, and legs.",
    "materials": "None"
  },
  {
    "title": "Step Ladder Hop Fun",
    "difficulty": "Medium",
    "category": "Jumping",
    "procedure": [
      "Use masking tape to make a ladder on the floor.",
      "Children hop from square to square using both feet.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Improves agility, balance, and coordination.",
    "materials": "Masking tape (2 ladders)"
  },
  {
    "title": "Scarf Dance Twirl",
    "difficulty": "Easy",
    "category": "Creative Movement",
    "procedure": [
      "Give each child a scarf.",
      "Play music and let them twirl and wave scarves freely.",
      "Repeat 5 minutes."
    ],
    "benefits": "Improves creativity, rhythm, and coordination.",
    "materials": "2 scarves"
  },
  {
    "title": "Mini Obstacle Crawl",
    "difficulty": "Medium",
    "category": "Agility",
    "procedure": [
      "Set up a short course with cushions, ropes, or chairs.",
      "Children crawl under, hop over, and move around safely.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Improves agility, coordination, and problem-solving.",
    "materials": "Cushions, ropes, chairs (2 sets)"
  },
  {
    "title": "Hop Balloon Fun",
    "difficulty": "Easy",
    "category": "Jumping",
    "procedure": [
      "Blow up 2 balloons.",
      "Children hop holding the balloon between knees from start to finish.",
      "Ensure safety and no balloon drops."
    ],
    "benefits": "Strengthens legs and improves coordination.",
    "materials": "2 balloons"
  },
  {
    "title": "Balance Book Walk",
    "difficulty": "Medium",
    "category": "Balance",
    "procedure": [
      "Children balance a small book on their head while walking on a taped line.",
      "Walk forward and backward, repeat 2–3 rounds.",
      "Focus on posture and fun."
    ],
    "benefits": "Enhances balance, posture, and focus.",
    "materials": "2 small books, masking tape"
  },
  {
    "title": "Animal Hop Relay",
    "difficulty": "Medium",
    "category": "Movement & Imagination",
    "procedure": [
      "Children hop like animals from start to finish.",
      "Change animals each round.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Improves leg strength, creativity, and endurance.",
    "materials": "None"
  },
  {
    "title": "Crab Crawl Maze",
    "difficulty": "Medium",
    "category": "Strength & Agility",
    "procedure": [
      "Set up a short maze using cushions or chairs.",
      "Children crab crawl through safely.",
      "Cheer and guide."
    ],
    "benefits": "Strengthens arms, core, and coordination.",
    "materials": "Cushions or chairs (2 sets)"
  },
  {
    "title": "Step & Clap Fun",
    "difficulty": "Easy",
    "category": "Coordination",
    "procedure": [
      "Children step forward, backward, sideways while clapping hands.",
      "Repeat 2–3 rounds at different tempos.",
      "Encourage fun and laughter."
    ],
    "benefits": "Enhances coordination, rhythm, and listening.",
    "materials": "None"
  },
  {
    "title": "Mini Hopscotch",
    "difficulty": "Medium",
    "category": "Jumping & Balance",
    "procedure": [
      "Use masking tape to make 2 hopscotch grids.",
      "Children hop through each grid with one or two feet.",
      "Repeat 2–3 times."
    ],
    "benefits": "Improves balance, coordination, and leg strength.",
    "materials": "Masking tape (2 grids)"
  },
  {
    "title": "Ball Toss Basket Game",
    "difficulty": "Easy",
    "category": "Hand-Eye Coordination",
    "procedure": [
      "Children toss soft balls into their own basket.",
      "Take turns and count successful throws.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Improves aim, coordination, and focus.",
    "materials": "2 soft balls + 2 baskets"
  },
  {
    "title": "Cushion Jump Circuit",
    "difficulty": "Medium",
    "category": "Jumping & Agility",
    "procedure": [
      "Create a short circuit with 3–4 cushions per child.",
      "Children hop forward, sideways, and over safely.",
      "Repeat 2 rounds."
    ],
    "benefits": "Enhances balance, coordination, and leg strength.",
    "materials": "6–8 cushions (3–4 per child)"
  },
  {
    "title": "Rolling Ball Crawl",
    "difficulty": "Medium",
    "category": "Coordination",
    "procedure": [
      "Children crawl while pushing a soft ball along a short path.",
      "Repeat 2–3 rounds safely.",
      "Parent ensures proper technique."
    ],
    "benefits": "Improves core strength and hand-eye coordination.",
    "materials": "2 soft balls"
  },
  {
    "title": "Freeze Animal Game",
    "difficulty": "Easy",
    "category": "Movement & Imagination",
    "procedure": [
      "Children move like animals freely.",
      "Parent shouts 'Freeze!' and they hold pose for 5 seconds.",
      "Repeat with 3–4 animals."
    ],
    "benefits": "Enhances creativity, balance, and body control.",
    "materials": "None"
  },
  {
    "title": "Scarf Twirl Dance",
    "difficulty": "Easy",
    "category": "Creative Movement",
    "procedure": [
      "Give each child a scarf.",
      "Play music and encourage twirling and waving.",
      "Repeat for 5 minutes."
    ],
    "benefits": "Improves coordination, rhythm, and creativity.",
    "materials": "2 scarves"
  },
  {
    "title": "Hop Balloon Challenge",
    "difficulty": "Easy",
    "category": "Jumping",
    "procedure": [
      "Blow up 2 balloons.",
      "Children hop holding the balloon between knees from start to finish.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Strengthens legs and coordination.",
    "materials": "2 balloons"
  },
  {
    "title": "Balance Book Walk Fun",
    "difficulty": "Medium",
    "category": "Balance",
    "procedure": [
      "Children balance a small book on their head while walking a taped line.",
      "Walk forward, backward, repeat 2 rounds.",
      "Focus on posture and fun."
    ],
    "benefits": "Enhances balance, focus, and posture.",
    "materials": "2 small books, masking tape"
  },
  {
    "title": "Mini Obstacle Adventure",
    "difficulty": "Medium",
    "category": "Agility",
    "procedure": [
      "Set up short obstacle courses with cushions, ropes, and chairs.",
      "Children navigate by crawling, hopping, and stepping safely.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Improves agility, coordination, and problem-solving.",
    "materials": "Cushions, ropes, chairs (2 sets)"
  },
  {
    "title": "Crab Crawl Race",
    "difficulty": "Medium",
    "category": "Strength",
    "procedure": [
      "Children do crab crawl from start to finish.",
      "Repeat 2–3 rounds for fun.",
      "Cheer for correct form."
    ],
    "benefits": "Strengthens core, arms, and legs.",
    "materials": "None"
  },
  {
    "title": "Animal Hop Relay 2",
    "difficulty": "Medium",
    "category": "Movement & Imagination",
    "procedure": [
      "Children hop like different animals.",
      "Switch animals each round, repeat 2–3 times.",
      "Encourage fun and creativity."
    ],
    "benefits": "Improves leg strength, endurance, and imagination.",
    "materials": "None"
  },
  {
    "title": "Jump Over Cushion Fun",
    "difficulty": "Medium",
    "category": "Jumping",
    "procedure": [
      "Place 3–4 cushions in a line per child.",
      "Children jump over safely with both feet.",
      "Repeat 2–3 rounds."
    ],
    "benefits": "Enhances leg strength, balance, and coordination.",
    "materials": "6–8 cushions (3–4 per child)"
  },
  {
    "title": "Rolling Ball Push Challenge",
    "difficulty": "Medium",
    "category": "Coordination",
    "procedure": [
      "Children crawl while pushing a soft ball along a short path.",
      "Do 2–3 rounds safely, focusing on form."
    ],
    "benefits": "Improves hand-eye coordination and core strength.",
    "materials": "2 soft balls"
  }
];


export default morningPhysicalActivities;
