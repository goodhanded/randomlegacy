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
                description: 'No additional money-making opportunities.'
            },
            {
                id: 2,
                on: true,
                name: 'Entertainer (Comedian)',
                description: 'May perform comedy in space.'
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
                description: 'May sell crafted paintings and call agent to collect money.'
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
                description: 'May pickpocket sims. May hack and create viruses.'
            },
            {
                id: 11,
                on: true,
                name: 'Astronomer (Space Ranger)',
                description: 'May go on space missions with the rocket ship.'
            },
            {
                id: 12,
                on: true,
                name: 'Astronomer (Smuggler)',
                description: 'May go on space missions with the rocket ship.'
            },
            {
                id: 13,
                on: true,
                name: 'Culinary (Chef)',
                description: 'May publish cookbooks (self-publishing).'
            },
            {
                id: 14,
                on: true,
                name: 'Culinary (Mixologist)',
                description: 'May publish bar guides (self-publishing).'
            },
            {
                id: 15,
                on: true,
                name: 'Tech Guru (eSport Gamer) ',
                description: 'No additional money-making opportunities.'
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
                name: 'Athlete (Bodybuilder)',
                description: 'No additional money-making opportunities.'
            },
            {
                id: 18,
                on: true,
                name: 'Athlete (Pro Athlete)',
                description: 'No additional money-making opportunities.'
            },
            {
                id: 19,
                on: true,
                name: 'Business (Management)',
                description: 'No additional money-making opportunities.'
            },
            {
                id: 20,
                on: true,
                name: 'Business (Investor)',
                description: 'May invest in stocks.'            },
            {
                id: 21,
                on: true,
                name: '(GTW) Doctor',
                description: 'No additional money-making opportunities. This career counts as a profession.'
            },
            {
                id: 22,
                on: true,
                name: '(GTW) Detective',
                description: 'No additional money-making opportunities. This career counts as a profession.'
            },
            {
                id: 23,
                on: true,
                name: '(GTW) Scientist',
                description: 'No additional money-making opportunities. This career counts as a profession.'
            },
            {
                id: 24,
                on: true,
                name: '(CL) Critic (Art Critic)',
                description: 'No additional money-making opportunities.'
            },
            {
                id: 25,
                on: true,
                name: '(CL) Critic (Food Critic)',
                description: ' If you have rolled Homemade, your food critic (and only your food critic) may eat out for food review purposes. No additional money-making opportunities.'
            },
            {
                id: 26,
                on: true,
                name: '(CL) Politician (Charity Organizer)',
                description: 'No additional money-making opportunities.'
            },
            {
                id: 27,
                on: true,
                name: '(CL) Politician (Politician)',
                description: 'May ask for bribes.'
            },
            {
                id: 28,
                on: true,
                name: '(CL) Social Media (Internet Personality)',
                description: 'May advertise on your social media page.'
            },
            {
                id: 29,
                on: true,
                name: ' (CL) Social Media (Public Relations)',
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
                description: 'All children born this generation must complete their childhood aspiration and receive an B grade in elementary school and an A grade in high school. They should also have a BFF made during childhood, and at least one boyfriend or girlfriend lasting at least 24 sim hours during their teen years. As toddlers, they must reach level 3 in all skills, including potty training, and raise at least one skill to level 5.'
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
                description: 'You must construct a significant expansion to the house this generation. You may also add or change a single lot trait, if you wish. If Random is your miscellaneous fun this generation, the trait changed and new trait must be randomly determined.'
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
                description: 'The heir, spouse and helpers may not help their children this generation, apart from basic needs like food and interaction (autonomous chatting over dinner). This includes helping with homework, mentoring or encouraging children in skills, and reading books to them. For toddlers, it is permitted to provide basic care such as food and diaper changes, but try to avoid any parent-child interactions that raise a skill bar, such as flash cards, reading books, potty training, and so on. Some autonomous talking is okay - the parents are deadbeat, not abusive - but don\'t deliberately train the communication skill. Children may teach themselves.'
            },
            {
                id: 8,
                on: true,
                name: 'Change of Scenery',
                description: 'It\'s moving time! At some point after the heir comes of age, you must either move to a new lot, or completely demolish the entire house and start over from scratch on your current lot. If Random is your miscellaneous fun this generation, the new lot\'s traits must be randomly determined. Re-roll if it\'s generation 1.'
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
            },
            {
                id: 13,
                on: true,
                name: 'Memorial',
                description: 'The heir, along with any spouses or helpers, must be memorialized this generation, by a sim with maxed skill in the relevant crafting skill(painting, photography or writing). Memorials may consist of: a painted portrait, a photograph, a biography, or a book of life. Each memorial can be crafted by a different sim if you want, and they don\'t have to all be the same type, though they should all be displayed together.' 
            },
            {
                id: 14,
                on: true,
                name: 'Themed Display',
                description: 'This generation, the heir, spouses and helpers should create a themed display somewhere in their house or yard. The display must contain at least 10 items, plant and craft level excellent or higher, from at least two different collections or craft disciplines, and must contain at least one craft and one collected item. For example, a display with 3 plants, 5 photographs and 2 space rocks would be okay, but a display with 4 photographs and 6 paintings would not be, because there is no collected item. The theme is left up to you, examples include: space(telescope prints and photographs of the alien home world), botany(plants, photographs of plants, and microscope prints of plants), flowers(plants and paintings of plants in the wild) and animals(frogs, insects and photographs of insects in the wild).'
            },
            {
                id: 15,
                on: true,
                name: 'Haunted House',
                description: 'From the time the heir comes of age to the time the heir dies, three sims must die an unnatural death on your home lot. Unnatural death is defined as any death except by old age, and the sims may be members of your household(such as unneeded spouses, spares that are about to move out, or even the heir themselves) or guests. Furthermore, the graves must stay on your home lot, and the ghosts be allowed to roam the house freely. The graves may be removed after this generation\'s heir dies.'
            },
            {
                id: 16,
                on: true,
                name: '(GT) Best Club Ever',
                description: 'Your heir must start their own club from scratch this generation. To complete this goal, the following criteria must be met concurrently: 1) The club must have 8 members. Sims may not join the club unless they are already friends with the club leader, so get to recruiting! 2) The club must have a hangout built specially for them, either on your home lot or on a community lot. The hangout should contain enough seating for the entire club and any necessary items to complete club activities. If you build on a community lot from the map view, take note of how much money you "spent" on the hangout and subtract it from your family\'s funds. 3) The club should have all ranks of one of the emotional vibes purchased, depending on the club\'s focus. Happy counts. 4) The club door perk must be unlocked (since you have a hangout). 5) In addition, three other club spirit perks(hats, jackets, wall decorations, etc) must be unlocked and used.'
            },
            {
                id: 17,
                on: true,
                name: '(CL) Domestic Dilemma',
                description: 'When this generation comes of age(or at the start of the game) you must either add a new "negative" trait or replace an existing trait(determine which of the three randomly) with a "negative" trait of your choice(unless you\'ve rolled Random). This generation, you must find a creative way in your story to overcome said negative trait. For example, Quake Zone might be overcome by a sim maxing their writing skill and writing 5 nonfiction bestseller books about earthquake safety, or perhaps by a sim maxing their handiness skill and equipping every appliance/plumbing object in the house with the unbreakable upgrade. Be creative! When the negative trait has been overcome, you may replace it with a trait of your choice if you wish(again, unless you\'ve rolled Random). Negative traits include: Cursed, Filthy, Gremlins, Grody, Haunted, Mean Vibe, On a Dark Ley Line, Quake Zone, Vampire Nexus'
            }
		],

		maritalStatuses: [
            {
                id: 1,
                on: true,
                name: 'Single',
                description: 'Your heir may not have a live-in partner after the first child is born. Any extra sims must be moved out of the house by 24 hours after the first child is born. A male heir may move in a female partner for the course of any pregnancies, but the 24 hour rule applies and she may not contribute financially. Partners that have moved out are not allowed to lurk around the house to help out with toddler care, and must be removed if they will not leave.',
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
                description: 'Determine traits and aspirations (including the childhood aspiration) randomly for all sims of this generation (the heir and their siblings). Adult aspirations should be chosen randomly from the list of aspirations, discarding any which are incompatible with other parameters, as stated earlier in the rules. Helpers and Spouses moved in should have their adult aspiration randomized in a similar manner, if you choose to change it. Any lot traits determined this generation, including initial move-in traits, must be random.'
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
                description: 'May not get quick meals from the fridge, order pizza, eat from food stalls or dine out, consume plasma packs, and may only cook meals with ingredients if all ingredients are present. The pre-made toddler meals you can serve from the high chair are considered quick meals.'
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
                description: 'May not call the handyman or purchase new objects if they break this generation. You must fix them. I don\'t care if you have no handiness skill, if you want to shower today you\'ll get to work, won\'t you?'
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
                description: 'This generation, sims may only eat healthy food. Healthy food includes: orange juice (quick meal), yogurt (quick meal), garden salad (cooking 1), wellness food, plasma fruit recipes, and your neighbors. In addition, the heir, spouse, helpers, and their children must each spend at least 3 hours each week performing physical activity, such as jogging, swimming, yoga, or playing on the monkeybars.'
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
            },
            {
                id: 17,
                on: true,
                name: 'Vacationer',
                description: 'At least one sim from the household must go on vacation at least once every sim week. If you don\'t have the OR game pack use the following alternate rule since that sim can\'t go on an actual vacation. They must use at least one vacation day from work, and must have a day outing of some sort, lasting for most of the day (you know the kind you\'d take in real life, leaving after breakfast and arriving back home in the evening), on their day off. This doesn\'t have to be the same sim every week.'
            },
            {
                id: 18,
                on: true,
                name: '(GT) Clubber',
                description: 'Starting from childhood or the time they join the household, the heir and every spouse/helper must belong to a club, attending a meeting at least once a week. They do not have to belong to the same club, though they can if you want. If you choose to use a household club, please keep in mind the rules about how to avoid making clubs cheaty(#19 under the Rules), specifically the ones prohibiting having a constant club gathering running at all times. They must actually get together in a group and do a thing in order to have a club gathering, you can\'t just run a gathering while they\'re all sleeping or doing random tasks around the house.'
            },
            {
                id: 19,
                on: true,
                name: 'On Call',
                description: 'Starting when the heir is a teen, they (or a spouse or helper) must respond to at least one "hang-out" phone call every week. This includes birthday parties and invitations to community lots, but does not include requests to come hang out at your home lot - you must actually leave your home lot for this to count.'
            },
            {
                id: 20,
                on: true,
                name: 'Town Explorer',
                description: 'Starting when the heir is a teen, they (or a spouse or helper) must visit a unique community lot every week, for at least 3 hours. The community lots may not be repeated to count for this, though you may visit them again just for fun.'
            },
            {
                id: 21,
                on: true,
                name: '(DO) Regular Diner',
                description: 'Once a week, the entire household must go out to eat at a restaurant. All three courses and something to drink should be ordered.'
            },
            {
                id: 22,
                on: true,
                name: '(CL) Festival Frequenter',
                description: 'Every time there is a festival, at least one household member must attend the festival for at least one sim hour. This doesn\'t have to be the same household member each time.'
            },
            {
                id: 23,
                on: true,
                name: '(CL) Flea Market Fanatic ',
                description: 'ome sims just can\'t pass up a great bargain. Why would you pay full price for anything? This generation, you may not purchase certain categories of items from the catalog. These items may only be purchased from the flea market or from unplayable sims selling their own goods on the street. Paintings left on public easels count. The categories are: Comfort (except beds), Lighting, Decorations (except mirrors).'
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
                description: 'Play a musical instrument of your choice in public to earn money from tips. You may also sell jingles and license songs you\'ve written. If you have City Living, singing counts as an instrument.'
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
                description: 'Dig up those little weird rocky-looking things and sell what you find. You may also sell the little treasures (aka, unwanted upgrade parts) that you dig out of your household plumbing, electronics and appliances. Collecting and breeding frogs is also allowed, as is collecting and selling insects (OR). Selling collectibles you\'ve traded for at the flea market is allowed.'
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
            },
            {
                id: 14,
                on: true,
                name: '(OR) Remedy Brewer',
                description: 'Brew herbal remedies and sell them for profit.'
            },
            {
                id: 15,
                on: true,
                name: '(GTW) Freelance Photographer',
                description: 'Take and sell photographs.'
            },
            {
                id: 16,
                on: true,
                name: '(GTW) Retail Owner',
                description: 'Manage a retail store that does not sell anything that\'s covered by any of the other options above. For example, you could have a store that sells food you\'ve cooked, but you could not sell raw produce at that store unless you had another sim in the household that rolled Gardener. This career counts as a profession.'
            },
            {
                id: 17,
                on: true,
                name: '(GT) DJ',
                description: 'Work as a DJ to earn tips, and license your mixtapes.'
            },
            {
                id: 18,
                on: true,
                name: '(DO) Restauranteur',
                description: 'Manage your own restaurant. This career counts as a profession.'
            },
		]

	});

})();