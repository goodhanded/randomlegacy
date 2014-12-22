(function() {
	
	'use strict';

	angular.module('app').value('data', {

		careerTypes: [
	        {
                id: 1,
                on: true,
	            name: 'Conventional Career',
	            description: 'Conventional Career'
	        },
	        {
                id: 2,
                on: true,
	            name: 'Unconventional Career',
	            description: 'Unconventional Career'
	        },
	        {
                id: 3,
                on: true,
	            name: 'Career Hopper',
	            description: 'Five conventional careers. You may jump between these careers as you wish, so long as you have spent a day at work in at least three by the time your sim becomes a full adult, and all five by the time your sim becomes an elder.'
	        },
	        {
                id: 4,
                on: true,
	            name: 'Unemployed',
	            description: 'This sim can have no job.'
	        }
		],

		children: [
	        {
                id: 1,
                on: true,
	            name: '1 Child',
	            description: 'Your heir must have only one child.'
	        },
	        {
                id: 2,
                on: true,
	            name: '2 Children',
	            description: 'Your heir must have exactly two children.'
	        },
	        {
                id: 3,
                on: true,
	            name: '3 Children',
	            description: 'Your heir must have exactly three children.'
	        },
	        {
                id: 4,
                on: true,
	            name: '4 Children',
	            description: 'Your heir must have exactly four children.'
	        },
	        {
                id: 5,
                on: true,
	            name: '5 Children',
	            description: 'Your heir must have exactly five children.'
	        }
		],

		conventionalCareers: [
    		{
                id: 1,
                on: true,
                name: 'Entertainer (Musician)',
                description: 'May busk for tips, sell jingles, and license songs.'
            },
            {
                id: 2,
                on: true,
                name: 'Entertainer (Comedian)',
                description: 'May perform comedy routines, publish comedy books(self-publishing), and perform comedy in space.'
            },
            {
                id: 3,
                on: true,
                name: 'Writer (Author)',
                description: 'May publish all book genres (self-publishing).'
            },
            {
                id: 4,
                on: true,
                name: 'Writer (Journalist)',
                description: 'May publish all book genres (self-publishing), and write articles.'
            },
            {
                id: 5,
                on: true,
                name: 'Painter (Master of the Real)',
                description: 'May sell crafted paintings and call agent to collect money.'
            },
            {
                id: 6,
                on: true,
                name: 'Painter (Patron of the Arts)',
                description: 'May sell crafted paintings.'
            },
            {
                id: 7,
                on: true,
                name: 'Secret Agent (Diamond Agent)',
                description: 'No additional money-making opportunities.'
            },
            {
                id: 8,
                on: true,
                name: 'Secret Agent(Villain)',
                description: 'No additional money-making opportunities.'
            },
            {
                id: 9,
                on: true,
                name: 'Criminal (Boss)',
                description: 'May pickpocket sims.'
            },
            {
                id: 10,
                on: true,
                name: 'Criminal (Oracle)',
                description: 'May pickpocket sims. May hack and create viruses once the career branches.'
            },
            {
                id: 11,
                on: true,
                name: 'Astronomer (Space Ranger)',
                description: 'No additional money-making opportunities.'
            },
            {
                id: 12,
                on: true,
                name: 'Astronomer (Smuggler)',
                description: 'May hack once the career branches.'
            },
            {
                id: 13,
                on: true,
                name: 'Culinary (Chef)',
                description: 'May publish cookbooks(self-publishing).'
            },
            {
                id: 14,
                on: true,
                name: 'Culinary (Mixologist)',
                description: 'No additional money-making opportunities.'
            },
            {
                id: 15,
                on: true,
                name: 'Tech Guru (eSport Gamer) ',
                description: 'May mod games, make apps, perform freelance programming jobs, compete in gaming tournaments and livestream.'
            },
            {
                id: 16,
                on: true,
                name: 'Tech Guru (Start-up Entrepeneur)',
                description: 'No additional money-making opportunities.'
            },
            {
                id: 17,
                on: true,
                name: 'Business (Angel Investor)',
                description: 'No additional money-making opportunities.'
            },
            {
                id: 18,
                on: true,
                name: 'Business (Business Tycoon)',
                description: 'No additional money-making opportunities.'
            },
            {
                id: 19,
                on: true,
                name: 'Athletic (Hall of Famer)',
                description: 'No additional money-making opportunities.'
            },
            {
                id: 20,
                on: true,
                name: 'Athletic (Mr. or Ms. Solar System)',
                description: 'No additional money-making opportunities.'
            }
		],

		generationalGoals: [
    		{
                id: 1,
                on: true,
                name: 'Perfect Careers',
                description: 'The heir, spouse, and helpers must reach level 10 in their careers. Re-rolls automatically if no conventional careers were rolled this generation.'
            },
            {
                id: 2,
                on: true,
                name: 'Fulfilled',
                description: 'The heir and spouse (if applicable) must complete their first aspiration. If the spouse is accidentally too old when they move in to have time to complete an aspiration, they are not required to do so, but try to be reasonable with this provision.'
            },
            {
                id: 3,
                on: true,
                name: 'Perfect Children',
                description: 'All children born this generation must complete their childhood aspiration and receive an B grade in elementary school and an A grade in high school. They should also have a BFF made during childhood, and at least one boyfriend or girlfriend lasting at least 24 sim hours during their teen years.'
            },
            {
                id: 4,
                on: true,
                name: 'Dependable',
                description: 'Your heir, spouse and helpers must complete all daily tasks for school and work, beginning in childhood or upon move-in to the house. If three days are missed in school, or five days missed in work, the goal is failed. Re-rolls automatically if no conventional careers were rolled this generation.'
            },
            {
                id: 5,
                on: true,
                name: 'Expansionist',
                description: 'You must construct a significant expansion to the house this generation.'
            },
            {
                id: 6,
                on: true,
                name: 'Collector',
                description: 'Your heir, spouse, helpers and children must complete and display one of the collections. All items must be found or grown that generation, and for plants you may not use seeds from previous generations... find your own! If you already completed part of a collection in a previous generation, you can choose that collection, but you must collect the objects you already have again with a sim from this generation. Collections and display requirements are as follows: \
                    Frogs (Anything), \
                    Gardening (Must be planted and grown to maturity, may be of any quality. May not be grafted into tomato/onion/basil plants to count as all three, you must have one plant for each collectable.), \
                    MySims Trophies (Anything), \
                    Metals (Anything), \
                    Crystals (Anything), \
                    Elements (Elemental Display Rack), \
                    Postcards (Bunchapals Postcard Corkboard), \
                    Fossils (Anything), \
                    Microscope Prints (Anything), \
                    Space Prints (Anything), \
                    Aliens (Anything), \
                    Space Rocks (Anything), or \
                    Fish (Any combination of bowls and mounting).'
            },
            {
                id: 7,
                on: true,
                name: 'Deadbeat Parents',
                description: 'The heir, spouse and helpers may not help their children this generation, apart from basic needs like food and interaction (autonomous chatting over dinner). This includes helping with homework, mentoring or encouraging children in skills, and reading books to them.'
            },
            {
                id: 8,
                on: true,
                name: 'Change of Scenery',
                description: 'It\'s moving time! At some point after the heir comes of age, you must either move to a new lot, or completely demolish the entire house and start over from scratch on your current lot. Re-roll if it\'s generation 1.'
            },
            {
                id: 9,
                on: true,
                name: 'Party King/Party Queen',
                description: 'Host every kind of party (house, dinner, wedding, birthday) with a gold medal in each. If you have more than four party types(through expansions, DLC or mods), roll to randomly determine the four party types that you will be attempting for this goal, re-rolling any duplicates.'
            },
            {
                id: 10,
                on: true,
                name: 'Idle Careers',
                description: 'May not make an effort to advance in your heir\'s, helper\'s and spouse\'s careers, including school. If the career goals happen to line up with aspirational goals, that\'s a happy coincidence, because you may advance in aspiration freely. Autonomous actions are also acceptable. If you\'ve rolled an unconventional career that has no tasks that sims will perform autonomously, you may only perform tasks for it if your sim has a whim to do it or if they do them autonomously.'
            },
            {
                id: 11,
                on: true,
                name: 'Friendship is Forever',
                description: 'Beginning when the heir is a child, they must make one new good friend every week. This friendship must be maintained through subsequent weeks, and may only be ended by the death of the friend.'
            },
            {
                id: 12,
                on: true,
                name: 'Midlife Crisis',
                description: 'This generation, one of the heir, spouses (including second chances) or helpers will experience a randomly-generated midlife crisis event. Between when this generation is rolled and when the first of the eligible sims reaches the adult lifestage (not YA), determine who will go through the crisis. If you have not picked someone before the first sim reaches adulthood, or is moved in as an adult, that sim will be the one. Once the selected sim reaches adulthood (and not sooner!), roll to determine three aspects to the midlife crisis. Each aspect has a deadline which it must either be completed or started during. The goal is complete when all aspects have been completed.'
            }
		],

		maritalStatuses: [
            {
                id: 1,
                on: true,
                name: 'Single',
                description: 'Your heir may not have a live-in partner after the first child is born. Any extra sims must be moved out of the house by 24 hours after the first child is born. A male heir may move in a female partner for the course of any pregnancies, but the 24 hour rule applies and she may not contribute financially.',
                numSecondaryCareers: 0
            },
            {
                id: 2,
                on: true,
                name: 'Couple',
                description: 'Your heir must obtain a romantic live-in partner. They do not have to be married.',
                numSecondaryCareers: 1
            },
            {
                id: 3,
                on: true,
                name: 'Mixed Single',
                description: 'Your heir may not have a live-in partner after the first child is born. Any extra sims must be moved out of the house by 24 hours after the first child is born. A male heir may move in a female partner for the course of any pregnancies, but the 24 hour rule applies and she may not contribute financially. Children must be a mix of naturally-born and adopted. If you have rolled to have only one child, you may have a second to satisfy this parameter.',
                numSecondaryCareers: 0
            },
            {
                id: 4,
                on: true,
                name: 'Mixed Couple',
                description: 'Your heir must obtain a romantic live-in partner. They do not have to be married. Children must be a mix of naturally-born and adopted. If you have rolled to have only one child, you may have a second to satisfy this parameter.',
                numSecondaryCareers: 1
            },
            {
                id: 5,
                on: true,
                name: 'Second Chance',
                description: 'Your heir must obtain two live-in partners during the course of the generation. At least one child must be born or adopted with the first partner.',
                numSecondaryCareers: 2
            },
            {
                id: 6,
                on: true,
                name: 'Single w/ Help',
                description: 'A non-romantic helper sim must live in the house. The helper sim can be anything you desire, from a friend of the family to a spare who decides to stick around.',
                numSecondaryCareers: 1
            },
            {
                id: 7,
                on: true,
                name: 'Mixed Single w/ Help',
                description: 'Children must be a mix of naturally-born and adopted. If you have rolled to have only one child, you may have a second to satisfy this parameter. A non-romantic helper sim must live in the house. The helper sim can be anything you desire, from a friend of the family to a spare who decides to stick around.',
                numSecondaryCareers: 1
            },
            {
                id: 8,
                on: true,
                name: 'Couple w/ Help',
                description: 'Your heir must obtain a romantic live-in partner. They do not have to be married. A non-romantic helper sim must live in the house. The helper sim can be anything you desire, from a friend of the family to a spare who decides to stick around.',
                numSecondaryCareers: 2
            },
            {
                id: 9,
                on: true,
                name: 'Mixed Couple w/ Help',
                description: 'Your heir must obtain a romantic live-in partner. They do not have to be married. Children must be a mix of naturally-born and adopted. If you have rolled to have only one child, you may have a second to satisfy this parameter. A non-romantic helper sim must live in the house. The helper sim can be anything you desire, from a friend of the family to a spare who decides to stick around.',
                numSecondaryCareers: 2
            },
            {
                id: 10,
                on: true,
                name: 'Single w/ 2 Help',
                description: 'Two non-romantic helper sims must live in the house. The helper sims can be anything you desire, from friends of the family to spares who decide to stick around. The helpers may be romantically involved with each other.',
                numSecondaryCareers: 2
            },
            {
                id: 11,
                on: true,
                name: 'Mixed Single w/ 2 Help',
                description: 'Two non-romantic helper sims must live in the house. The helper sims can be anything you desire, from friends of the family to spares who decide to stick around. The helpers may be romantically involved with each other. Children must be a mix of naturally-born and adopted. If you have rolled to have only one child, you may have a second to satisfy this parameter.',
                numSecondaryCareers: 2
            },
            {
                id: 12,
                on: true,
                name: 'Full House',
                description: 'Same as single, but THREE non-romantic helper sims must live in the house. The helper sims can be anything you desire, from friends of the family to spares who decide to stick around. The helpers may be romantically involved with each other.',
                numSecondaryCareers: 3
            }
		],

		midlifeCrises: [
            {
                id: 1,
                on: true,
                name: 'Re-roll Miscellaneous Fun',
                deadline: '24 hours',
                description: 'Your Miscellaneous Fun roll will change. It takes effect immediately, with weekly tasks starting the following Sunday.'
            },
            {
                id: 2,
                on: true,
                name: 'Randomize a Trait',
                deadline: '24 hours',
                description: 'Randomly determine which of your sim\'s traits will change, then use a cheat to remove that trait, replacing it with another that has been randomly determined.'
            },
            {
                id: 3,
                on: true,
                name: 'Re-roll Career',
                deadline: '24 hours',
                description: 'Re-roll your sim\'s career. This means a new primary career if it\'s the heir, and a new secondary career if it\'s a spouse or spare.'
            },
            {
                id: 4,
                on: true,
                name: 'Make a Major Purchase',
                deadline: '24 hours',
                description: 'Buy something shiny and expensive (relative to how much wealth you have) for your house.'
            },
            {
                id: 5,
                on: true,
                name: 'Have a Romantic Crisis',
                deadline: '48 hours',
                description: 'Your sim\'s love life is thrown into turmoil. Perhaps they meet a new lover, cheat on their spouse, or simply have a falling out with a long-time partner. This must begin within 48 hours, but doesn\'t have to resolve ever.'
            },
            {
                id: 6,
                on: true,
                name: 'Change Style to Recapture Youth',
                deadline: '24 hours',
                description: 'Your sim must change their style (mirror and dresser, CAS cheats if necessary) to recapture their youth. Perhaps even get a tattoo. They can change back after a period of a few days if they want.'
            },
            {
                id: 7,
                on: true,
                name: 'Gain a New Skill',
                deadline: '1 week',
                description: 'Your sim must gain at least 5 skill levels in a skill they haven\'t used much previously. This counts from the level they\'re currently at, so if a sim has level 2 charisma, they must attain level 7.'
            },
            {
                id: 8,
                on: true,
                name: 'Have a Child',
                deadline: '1 week',
                description: 'Your sim must either have a biological child or adopt a child. Either way, it will be raised with the rest of the generation\'s children. Add one child to the number of children you will have this generation.'
            },
            {
                id: 9,
                on: true,
                name: 'Randomize Aspiration',
                deadline: '24 hours',
                description: 'Randomly pick a new aspiration for your sim, throwing out any that are incompatible with your other rolls. If you also have to re-roll your sim\'s career, use the new career when determining aspiration compatibility.'
            }
		],

		miscellaneousFun: [
            {
                id: 1,
                on: true,
                name: 'Random',
                description: 'Determine childhood aspiration and traits randomly for all sims of this generation (the heir and their siblings). Adult aspirations should be chosen randomly from the list of aspirations, discarding any which are incompatible with other parameters, as stated earlier in the rules. Helpers and Spouses moved in should have their adult aspiration randomized similarly, if you choose to change it.'
            },
            {
                id: 2,
                on: true,
                name: 'Partier',
                description: 'Throw at least one party (of any type and rating) every week.'
            },
            {
                id: 3,
                on: true,
                name: 'Mischief Managed',
                description: 'Your heir must play a successful prank once every week from the time they age into a teen. Pranks include: making a prank call(mischief 3+), clogging drains at other lots (mischief 5+), calling in to play hooky(mischief 6+), sabotaging a rocket ship (mischief 8+), using a stink potion (mental 10+), sabotaging objects and sims (Tormentor reward trait), and any prank options performed with a partner in crime (mischief 4+).'
            },
            {
                id: 4,
                on: true,
                name: 'Moody',
                description: 'Once a week, your heir and spouse(if applicable) must spend at least 3 consecutive hours in a certain mood, randomly chosen from the following list: inspired, happy, angry, embarrassed, playful, flirty, sad, bored, dazed, confident, focused, tense, uncomfortable. Heir and spouse may have different required moods.'
            },
            {
                id: 5,
                on: true,
                name: 'Homemade',
                description: 'May not get quick meals from the fridge or order pizza, and may only cook meals with ingredients if all ingredients are present.'
            },
            {
                id: 6,
                on: true,
                name: 'Runs in the Family',
                description: 'Pick a trait from your heir (not a bonus or reward trait). Every child born to your heir must take this trait at the earliest opportunity.'
            },
            {
                id: 7,
                on: true,
                name: 'Perfect Attendance',
                description: 'From childhood onwards, your heir and helpers must never be more than one hour late to work or school. Similarly, they may not make use of the leave early function. A five-strike allowance is provided for accidental lateness (like if you queue up actions and don\'t notice that they didn\'t leave for work), but intentional lateness for playing strategy or the fifth lateness will result in a loss of the challenge. This restriction also applies to the heir\'s children and any spouses or helpers moved in later.'
            },
            {
                id: 8,
                on: true,
                name: 'Fixer Upper',
                description: 'May not purchase new objects if they break this generation. You must fix them. I don\'t care if you have no handiness skill, if you want to shower today you\'ll get to work, won\'t you?'
            },
            {
                id: 9,
                on: true,
                name: 'Half-Siblings',
                description: 'Sims born this generation must each be with a different partner.'
            },
            {
                id: 10,
                on: true,
                name: 'Fighter',
                description: 'The heir, spouse or a helper (pick one and stick with it) must get in a fight at least once a week.'
            },
            {
                id: 11,
                on: true,
                name: 'Joker',
                description: 'Free re-roll of one category, now or in a future generation.'
            },
            {
                id: 12,
                on: true,
                name: 'Health Nut',
                description: 'This generation, sims may only eat healthy food. Healthy food includes: orange juice (quick meal), yogurt (quick meal), garden salad (cooking 1), (more?). In addition, the heir, spouse, helpers, and their children must each spend at least 3 hours each week performing physical activity, such as jogging, push-ups, or playing on the monkeybars.'
            },
            {
                id: 13,
                on: true,
                name: 'Gourmet',
                description: 'Once every week, the entire family (heir, spouse, and children) must find the time to sit down all at once and enjoy a gourmet meal prepared especially for the occasion. It doesn\'t matter whether the heir or the spouse prepares the meal, but it must be from the gourmet cooking skill, not the regular cooking skill.'
            },
            {
                id: 14,
                on: true,
                name: 'Hands Off!',
                description: 'You may not use the "hand of god" to clean up books and so on. Sims must clean up on their own. Selling things from their inventory is okay.'
            },
            {
                id: 15,
                on: true,
                name: 'Hobbyist',
                description: 'Your heir and spouse (if applicable) must each pick a hobby activity (such as painting, playing chess, jogging, fishing, etc) that is unrelated to their rolled career and devote at least 3 hours every sim week to practicing that activity. They may not use the activity to make money.'
            },
            {
                id: 16,
                on: true,
                name: 'My Precious',
                description: 'When your sim finds something they like, it\'s hard for them to let it go. Pick one of the options below to build a collection over the course of your heir\'s lifetime. The collection must be displayed somewhere on the legacy lot, so it may not be kept in an inventory, until the generation is complete.',
                options: [
                    {
                        name: 'I finds it, it\'s mine',
                        description: 'At least once a week, your sim must go out and find a unique object to add to their collection (pick a single category: frogs, MySims Trophies, metals, crystals, elements, fossils, aliens, space rocks or fish). You may not display duplicates. If you have found one of every item and the generation isn\'t complete yet, pick a new collection to begin.'
                    },
                    {
                        name: 'So bright, so beautiful, my precious',
                        description: 'Once a week, your sim must purchase something beautiful and shiny from the decorations tab in buy mode. This should be something that exists only to look awesome, and should be displayed all together(or as trophy centerpieces in each room or something), not decor that "blends in" such as toilet paper rolls in the bathroom or a pan rack in the kitchen. If your sim is insane and decides to build a "bathroom shrine" in their living room, that\'s totally legit, but it should be done to add to the story, not just because you couldn\'t be bothered to find a better idea than buying misc decorations for your bathrooms to fulfill this fun.'
                    }
                ]
            }
		],

		unconventionalCareers: [
    		{
                id: 1,
                on: true,
                name: 'Freelance Painter',
                description: 'Paint whatever you want whenever you want and sell it to collectors.'
            },
            {
                id: 2,
                on: true,
                name: 'Freelance Author',
                description: 'Write and publish whatever you want whenever you want.'
            },
            {
                id: 3,
                on: true,
                name: 'Freelance Musician',
                description: 'Play a musical instrument of your choice in public to earn money from tips. You may also sell jingles and license songs you\'ve written.'
            },
            {
                id: 4,
                on: true,
                name: 'Gardener',
                description: 'Plant, harvest and sell produce and flowers of all kinds.'
            },
            {
                id: 5,
                on: true,
                name: 'Fishersim',
                description: 'Sell whatever you can manage to catch.'
            },
            {
                id: 6,
                on: true,
                name: 'Treasure Hunter',
                description: 'Dig up those little weird rocky-looking things and sell what you find. You may also sell the little treasures (aka, unwanted upgrade parts) that you dig out of your household plumbing, electronics and appliances. Collecting and breeding frogs is also allowed.'
            },
            {
                id: 7,
                on: true,
                name: 'Carpenter',
                description: 'Use the woodcrafting bench to make and sell furniture, as well as complete woodcrafting projects.'
            },
            {
                id: 8,
                on: true,
                name: 'Freelance Comedian',
                description: 'Use the microphone to perform comedy routines and publish comedy books (self-publishing).'
            },
            {
                id: 9,
                on: true,
                name: 'Freelance Programmer',
                description: 'Use your programming skills on the computer for a variety of tasks, including creating apps, creating plugins and freelance work.'
            },
            {
                id: 10,
                on: true,
                name: 'Space Explorer',
                description: 'Build your own rocket and take to the stars, selling what you bring back from your travels.'
            },
            {
                id: 11,
                on: true,
                name: 'Professional Gamer',
                description: 'Create computer games (programming 9), livestream and compete in gaming tournaments to earn money.'
            },
            {
                id: 12,
                on: true,
                name: 'Cybercriminal',
                description: 'Create viruses and hack for money.'
            },
            {
                id: 13,
                on: true,
                name: 'Professional Host/Hostess',
                description: 'Host social gatherings of all kinds and sell the rewards you earn for money.'
            }
		]

	});

})();