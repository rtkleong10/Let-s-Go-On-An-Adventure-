# Let’s Go On An Adventure
By Tiffany Leong

## Start
### Title
<h2>Let’s Go On An Adventure!</h2>

[[> Start|Class Selection]]

<div class=“img qrcode"></div>

<<set $HAS_PEN to false>>
<<set $TOOK_QUEST to false>>
<<set $AGGRAVATE_MARK to false>>
<<set $HELPED_SLIMES to false>>
<<set $TRIED_WARRIOR to false>>
<<set $TRIED_MAGE to false>>
<<set $TRIED_THIEF to false>>
<<set $TRIED_ARCHER to false>>

### Class Selection
Greetings, young adventurer!

Please select a class.

<<if not $TRIED_WARRIOR>>[[> Warrior|Warrior]]
<</if>><<if not $TRIED_MAGE>>[[> Mage|Mage]]
<</if>><<if not $TRIED_THIEF>>[[> Thief|Thief]]
<</if>><<if not $TRIED_ARCHER>>[[> Archer|Archer]]
<</if>>[[> Peasant->Peasant]]

### Warrior
So, you want to be a warrior, huh? According to the Great Warrior Bob, to become a warrior you must pass his test. You must pull out a sword from the Stone of Strength.

You turn to see a queue of a few thousand ripped adventurers waiting to try.

As you can see, you may have to wait a while.

A really long while.

Like about 3 months. Or years.

You can wait here and I’ll let you know when it’s your turn. Otherwise, you can just pick something else.

[[> Back|Class Selection]]
<<set $TRIED_WARRIOR to true>>

### Mage
So, you’d like to become a master of the magical arts? Well, first you’ll have to see if the magic chooses you.

Place your hands on the mystical orb.

...

ORB: “Ew, get your hands off me!”

Well, looks like the orb says no. Tough luck, kid.

[[> Back|Class Selection]]
<<set $TRIED_MAGE to true>>

### Thief
Okay, give me a moment. Let me go get you a knife.

Here you g-

A thief runs from the shadows and snatches the knife before it drops into your hands.

Well, that was our last knife. Looks like you’ve got to pick something else.

[[> Back|Class Selection]]
<<set $TRIED_THIEF to true>>

### Archer
Wow, this is embarrassing.

It looks like we’re fresh out of bows and arrows. We just gave the last four to a group of adventurers a minute ago. Maybe you might want to pick something else?

[[> Back|Class Selection]]
<<set $TRIED_ARCHER to true>>

### Peasant
Congratulations, young peasant! You’ve chosen a very noble role. Be prepared to go on an adventure filled with glorious quests, such as slaying the emerald dragon that...

Oh, sorry about that. That quest only accepts warriors. No worries, there’s plenty of other quests that you could go on.

Let me just consult my book for a second.

Let’s see...

Defeating the black mage... needs a level 5000 mage

Saving the princess... but must be handsome...

Finding the cure for cancer...

[[> 5 minutes later|Given Weapon]]

### Given Weapon
Ah, here. An old lady in the city needs some help. She’ll accept any adventurer. That could be you!

Okay, here’s your weapon.

<div class="box achievement">Achievement Unlocked: Obtain a weapon</div>
You look down to see a pen materialise in your palm.

[[> “Wow, a pen! I can’t wait to um… write?”|Accept Pen]]
[[> “You call this a weapon?”|Refuse Pen]]

### Accept Pen
Glad you like it! It’s a 0.5 black gel pen I got on sale for $0.50. I mean, this is a $5,000 fountain pen. Its chassis is made of refined glass and its ink was harvested from the finest veltish squids.

[[> “Cool!”|Ready]]
<<set $HAS_PEN to true>>

### Refuse Pen
Rude, much? It’s the only thing we could get you on such short notice. If you hate it so much, then I’ll just have to take it back.

The pen instantly vanishes from your hand.

[[> “I didn’t need it anyways.”|Ready]]
<<set $HAS_PEN to false>>

### Ready
<<if $HAS_PEN>>Okay, no more dilly-dallying.<<else>>Sure, whatever you say.<</if>>

Now, are you ready to begin your journey?

[[> Yes|Start]]
[[> No|Start]]

### Start
Terrific! Let’s go!

[[> Start|Walking to City]]

## Archer Mark
### Walking to the City
Suddenly, you find yourself on a yellow brick road leading to the city. You feel the wind blowing through your hair and hear the birds singing. As you admire the scenery, you wonder what fortunes await you.

<div class="arrow"></div>

Suddenly, an arrow whishes past you. It lands bullseye on a dartboard on a tree behind you.

[[> “What the hell?”|Meet Bullies]]

### Meet Bullies
ARCHER MARK: “Hey, watch where you’re going, peasant! Real adventurers are training over here.”

He and his fellow archers burst into laughter.

[[> “I’m so sorry. I’ll be on my way.”|Apologise to Bullies]]
[[> “Why don’t you watch where you’re shooting, asshole!”|Shout at Bullies]]

### Apologise to Bullies
ARCHER MARK: “Yeah, you better be! Know your place, peasant.”

You turn away and scuttle off towards the city.

[[> Next|Reach the City]]
<<set $AGGRAVATE_MARK to false>>

### Shout at Bullies
ARCHER MARK: “Sorry, what was that? I don’t speak peasant.”

[[> “And I don’t speak stupid!”|Insult Bullies]]
<<set $AGGRAVATE_MARK = true>>

### Insult Bullies
ARCHER MARK: “What did you just say to me? Boys, grab your bows. It looks like we’ve got a new target.”

It was at this moment you knew you f*cked up.

ARCHER MARK: “On my mark. One...”

You start to make a break towards the city. Their arrows miss you by inches. You keep running until you’re out of their range.

[[> Next|Reach the City]]

## Old Lady
### Reach the City
When you finally make it past the gates of the city, you collapse and lay down on the ground to rest for a minute.

Or maybe five?

...

Okay, it’s literally been 10 minutes. Man, you really need to work out more.

Seriously, get up. You’re supposed to be helping the old lady, remember?

[[> “Okay, fine.”|Meet the Old Lady]]

### Meet the Old Lady
You finally get up. You wobble for a bit because of pins and needles.

As you wander around the almost empty city, you wonder where’s the old lady.

OLD LADY: “Hello? Down here!”

You look down to see a small old lady waving for your attention.

OLD LADY: “Oh, thank goodness, you’re here. I need your help.”

[[> “Sure, what do you need help with?”|Accept Quest]]

### Accept Quest
OLD LADY: “It’s the haunted forest. The slimes have been attacking our gates and villagers. Sometimes, I can hear them knocking on our gates at night. I’m terrified. Please help us. You’re a wizard or warrior or something, right?”

You start to fidget. The old lady looks you up and down and realises.

OLD LADY: “Oh, you’re just a dumb peasant.”

[[> “Don’t worry, miss. I can still help you!”|Help Old Lady 1]]
[[> “So what? As if you’re any more powerful!”|Insult Old Lady]]

### Help Old Lady 1
OLD LADY: “Oh, that’s so very kind of you, young adventurer. The haunted forest is just outside of the village. I need you to kill 20 slimes.”

[[> “Why 20?”|Help Old Lady 2]]

### Help Old Lady 2
OLD LADY:	“It’s a nice number.”

<div class="box quest">Quest: 0/20 slimes killed</div>
She wishes you good luck as you leave the city.

[[> Next|Haunted Forest]]
<<set $TOOK_QUEST to true>>

### Insult Old Lady
OLD LADY: “Excuse me! I’ll have you know that I’m a level 100 mage, peasant. I’m just here to provide quests for new adventurers.”

She starts casting jinxes at you. You run away to escape her attacks. But you’re too slow.

One hits you in the heart and you fall to the ground.

[[> Next|Death]]
<<set $TOOK_QUEST to false>>

## Slimes
### Haunted Forest
As you exit the city from a different gate, you find the path much darker and harder to follow.

Tree branches overlapping, blocking out the sun.

But there’s one spot where the light manages to shine through. It illuminates a sign that writes:

<div class="box sign">HAUNTED FOREST
ADVENTURERS BEWARE</div>
You begin to hear branches crack in the distance.

[[> “Who’s there?”|Meet the Slimes]]

### Meet the Slimes
A slime hops into view. He seems excited to see you as he starts moving quickly towards you.

SLIME: “Young adventurer, please listen to me.”

[[> Attack|Attack the Slimes 1]]
[[> Walk Away|Ignore the Slimes]]
[[> Listen|Listen to the Slimes 1]]

### Attack the Slimes 1
You immediately punch the slime in the face with all of your peasant strength. Luckily for you, slimes are about the only thing weaker than you.

SLIME: “Ouch! What was that for?”

You punch the slime one more time for good measure. It dies and drops EXP.

<div class="box achievement">Achievement Unlocked: Committed Murder</div>
[[> Next|Attack the Slimes 2]]

### Attack the Slimes 2
From behind the trees, more slimes hop into sight. They look horrified at the sight of their fallen fellow slime.

A young slime with a bow on her head hops forward and stares at you, mouth agape in horror.

SLIME WITH BOW: “Why did you kill my brother?”

She cries before running back to what appears to be her mother.

[[> “It’s kill or be killed!”|Attack the Slimes 3]]
[[> “I’m so sorry, miss.”|Try to Stop]]

### Attack the Slimes 3
You wipe the goo off your fists and run to attack the rest of the slimes. The slimes scream in panic as they try in vain to escape.

<div class="box achievement">Achievement Unlocked: Genocide</div>
<div class="box quest">Quest Complete: 20/20 slimes killed</div>
[[> Return to the city|Complete Quest 1]]
<<set $HELPED_SLIMES to false>>

### Try to Stop
You start to apologise to the young slime. But, all of sudden, your arms being moving against your will. Before you know it, you’re punching her. She screams. But your body doesn’t stop. You continue to attack the rest of the slimes until all that’s left of them is goo on the forest floor.

You look down at your hands, trembling.

Woops, my bad. I may have forgotten to turn off your auto-attack. But don’t be so glum. You’ve just unlocked another achievement and completed your quest!

<div class="box achievement">Achievement Unlocked: Genocide</div>
<div class="box quest">Quest Complete: 20/20 slimes killed</div>
[[> Return to the city|Complete Quest 1]]
<<set $HELPED_SLIMES to false>>

### Complete Quest 1
The old lady seems a bit shocked to see you return so soon.

OLD LADY:	“Wow, good job for a peasant.”

<div class="box reward">Reward: Apple</div>
[[> “That’s it?”|Complete Quest 2]]

### Complete Quest 2
OLD LADY: "Hey, apples are delicious and good for your health! Youngsters nowadays…”

The old lady mutters under her breath.

As she trails off, she slowly starts to fade away.

[[> Next|Come Back]]

### Ignore the Slimes
You turn to leave. The slime yells at you frantically as it tries to catch up.

SLIME: “Wait, come back! Listen to me! You’re in great danger!”

You quicken your pace until you’re out of earshot.

[[> Next|Wander Off to the City]]

### Wander Off to the City
Somehow, you find yourself back in the city.

[[> “Wait, what?”|Come Back]]
<<set $HELPED_SLIMES to false>>

### Listen to the Slimes 1
SLIME: “We’ve been cursed. We were once adventurers just like you. But when we tried to help the old lady, she cursed us and turned us into slimes. Please, young adventurer, we need your help to undo her curse.”

[[> “I’ll help you.”|Listen to the Slimes 2]]
[[> “Well, that’s a you problem.”|Ignore the Slimes]]

### Listen to the Slimes 2
SLIME: “Thank you, kind soul. But be warned, she has ears throughout the kingdom. I’m afraid she might even be listening to us as we spea-”

Suddenly, the slime disappears and you find yourself back in the city.

[[> “Wait, what?”|Come Back]]
<<set $HELPED_SLIMES to true>>

## Final Battle
### Come Back
Bewildered, you start to wander around the city. That’s when you begin to notice a burning smell coming from one of the houses.

You find yourself compelled to follow its trail. As you move closer and closer, you hear screams.

VOICE: “Help! Help! Help!”

You hurry towards the source of the sound. You end up in front of a small cottage in the centre of the city.

[[> “Hello? Are you all right?”|Open the Door]]

### Open the Door
The door creaks open, revealing the old lady with a twisted grin.

OLD LADY: “Ah, young adventurer. Care to join us?”

She opens the door further to reveal ARCHER MARK suspended over a steaming cauldron. He’s screaming at the top of his lungs.

You try to run away, but your body is paralysed under her spell. You hear the door shut behind you.

<<if $HELPED_SLIMES>>[[> Next|Saved by Slimes 1]]
<<else>>[[> Next|ARCHER MARK Dies]]<</if>>

### Saved by Slimes 1
She waves her hand, compelling your body to walk forward towards the cauldron. You close your eyes and begin to brace yourself for the worst.

All of sudden, the windows shatter. The witch’s spell weakens for a moment, allowing you to turn around.

It’s the slimes. They’ve come to save you.

[[> Next|Saved by Slimes 2]]

### Saved by Slimes 2
The slimes start to knock down the witch’s equipment. Some of them hop over to save ARCHER MARK.

The witch looks around. She screams as she casts hexes frantically at the slimes.

Now’s your chance to attack.

<<if $HAS_PEN>>[[> Stab her with your pen|Stab the Witch]]
<<else>>[[> Punch her|Punch the Witch]]<</if>>

### ARCHER MARK Dies
She mutters an incantation. The string suspending ARCHER MARK snaps.

He falls into the cauldron. After a few seconds, a slime hops out of the cauldron and out the door.

The witch smiles, satisfied, before turning to face you.

OLD LADY: “Hmm, I didn’t mean to turn you so soon. But I guess it can’t be helped.”

[[> Next|Die in the Cauldron]]

### Die in the Cauldron
She lifts you up with a spell and drops you into the cauldron. You feel your skin bubble as your body slowly morphs into a slime.

Painstakingly, you wait for her to let you out, but she doesn’t.

She leaves you to burn.

[[> The End|Death]]

### Stab the Witch
You stab the witch through her heart. Luckily for you, the witch’s one weakness is cheap pen ink.

She falls to the ground.

You turn to see ARCHER MARK back on his feet after being freed by the slimes.

<<if $AGGRAVATE_MARK>>[[> Next|Killed by Mark]]
<<else>>[[> Next|Befriend Mark]]<</if>>

### Punch the Witch
You try to punch the witch. But your peasant punches are no match for the witch. She doesn’t even flinch.

She casts a freezing spell at everyone in the room. She begins to turn to you with a tight-lipped smile on her lips.

[[> Next|Die in the Cauldron]]

### Killed by Mark
Before you can react, he punches you in the face.

ARCHER MARK: “Stupid peasant.”

Even as an archer, his punch was strong enough to knock you out.

[[> The End|Death]]

### Befriend Mark
He holds out his hand to you. You hesitate before shaking it.

ARCHER MARK: “You’re not so bad for a peasant.”

[[> The End|Survived]]

## The End
### Survived
...

Oh my god, did you actually survive? Wow, um, congratulations!

Sorry, I didn’t prepare a prize or anything. But, here, have an imaginary cookie.

<div class="img cookie"></div>
<<link "> Exit">><<script>>window.close()<</script>><</link>>

### Death
‘'Game Over''
Wow, that was sad. RIP, bro.

<<if not $TOOK_QUEST>>Maybe, you shouldn’t have underestimated old ladies, huh?<<elseif not $HELPED_SLIMES>>Maybe, you should’ve listened to those poor innocent slimes, huh?<<elseif not $HAS_PEN>>Maybe, you might want to accept weapons when people give them to you, huh?<<elseif $AGGRAVATE_MARK>>Maybe, you might want to avoid insulting people who are much stronger than you, huh?<</if>>

Well, you can always try again.

[[> Try again|Title]]
<<link "> Exit”>><<script>>window.close()<</script>><</link>>