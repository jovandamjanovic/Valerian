var locations = ["storage", "personalGear"];
var gear = [
    [{
        Name: "M34 Autocannon",
        Description: "An autocannon is a crew-served heavy weapon, a self-loading high calibre cannon that uses dense solid shells to punch through armour. Though unable to fully penetrate the ceramite of Space Marine power armour, they decimate light to medium vehicles and see widespread use in the Imperial Guard and many renegade armies. The M34 autocannon is an older version of a common Imperial Guard pattern in the Jericho Reach, and uses a tripod mount. It can be manned by one person, though it ideally employs a crew of two to move and set up.",
        location: [{
            owner: "storage",
            amount: 36
        }]
    }, {
        Name: "Melta Bombs",
        Description: "Perhaps the most powerful portable explosive in existence, melta-bombs use nano-adhesives to adhere to metallic surfaces where they detonate with a lethal shaped charge of intense heat, similar in effect to a melta weapon. They are ideal for destroying bulkheads, vehicle hulls, and other heavily armoured targets. The common Imperial variety is roughly domed in shape but heavy and unwieldy. Handles on the casing instead allow the user to heft the bomb and slap it into place against the target surface but are impractical to throw (especially should the explosive side be facing the user when it detonates). A melta-bomb explodes with 6d10 E Damage, Penetration 12 with a range of two meters. Any survivors must take an Agility Test or catch on fire.",
        location: [{
            owner: "storage",
            amount: 94
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Grenade Launcher",
        Description: "Simple in design, grenade launchers are usually little more than smoothbore launchers, often fed from r evolving chambers. Their primary usefulness is the ability to fire a wide variety of grenades, from krak and frag grenades to more specialised loads such as smoke, gas, and flares.",
        location: [{
            owner: "storage",
            amount: 100
        }]
    }, {
        Name: "Reaver Rifle",
        Description: "A common sniper rifle variant within the Vortex, the reaver long rifle fires heavy glass and iron darts loaded with virulent toxins guided by a coherent sighting beam. This makes it accurate and extremely deadly, but difficult to use with precision.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Stun Grenade",
        Description: "Stun Grenades use a combination of a loud explosive and flash of light to momentarily incapacitate targets.",
        location: [{
            owner: "storage",
            amount: 995
        }, {
            owner: "personalGear",
            amount: 2
        }]
    }, {
        Name: "Null Rod",
        Description: "Imperial psykers are perhaps the saddest examples of how the Imperium denigrates its slaves; beings who should be unfettered to best realise their powers are shackled and bound to become lapdogs for their lessers. Still, they represent a threat until they can be swayed to the true path, and a null rod allows those unblessed with psychic defences to keep their powers in check. Most often appearing as obsidian cylinders of roughly 30cm crawling with arcane energies, a null rod can negate the powers of any psykers within 2d10 meters, causing them to take all tests to use any psychic powers with a –30 Penalty. They also offer personal protection from psychic attacks by granting a +30 bonus to resist any psychic power that directly affects him. A null rod also has such furious energy that it acts as a power weapon when used as a club or truncheon (use the profile for a power sword without the Balanced Quality).",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Combi-Bolter",
        Description: "The combi-bolter is a precursor to the Imperial storm bolter—essentially two bolters welded together with a linked firing mechanism. The result is an unwieldy and heavy weapon, but one that possesses an impressive rate of fire.",
        location: [{
            owner: "storage",
            amount: 92
        }]
    }, {
        Name: "Velklir Rapier",
        Description: "Many of the sorcerers of Velklir on Q’sal are accompanied by elite bodyguards as they make their deals with warbands and pirates. These bodyguards are expertly trained and carry a unique pattern of sword that sends chills down the spine of even the most seasoned slaver. Any Heretic who fancies himself a swordsman would sell his soul for this weapon, or preferably someone else’s. Impossibly thin, the blade seems more a ray of light than metal and shimmers with an iridescent milky-white colour. It is also seemingly unbreakable no matter what massive weapons it might act to parry. In combat the blade twists and bends towards its target as if it was guiding its tip itself, when removed blood drips off as if the weapon was disdainful of such an easy kill. Users often feel overly tired after these combats, but this seems a very small price to pay. After the rapier is used to kill an opponent, the user must take a Challenging (-0) Toughness Test or suffer one level of Fatigue as the rapier literally drains them of their life force, the better to make further kills. This is a one-handed melee weapon.",
        location: [{
            owner: "storage",
            amount: 100
        }]
    }, {
        Name: "Frag Grenade",
        Description: "Fragmentation or Frag grenades and missiles are filled with shot, heavy wire, or metallic shards to create high-velocity shrapnel fragments when they explode, making them deadly when used against infantry.",
        location: [{
            owner: "storage",
            amount: 998
        }, {
            owner: "personalGear",
            amount: 2
        }]
    }, {
        Name: "Hallucinogen Grenade",
        Description: "Hallucinogen grenades induce a variety of short-lived psychological states and delusions in its targets literally making them go mad.",
        location: [{
            owner: "storage",
            amount: 998
        }, {
            owner: "personalGear",
            amount: 2
        }]
    }, {
        Name: "Haywire Grenade",
        Description: "Designed to take out tech and vehicles, a well-placed haywire grenade shuts down electrical systems within its field of effect",
        location: [{
            owner: "storage",
            amount: 998
        }, {
            owner: "personalGear",
            amount: 2
        }]
    }, {
        Name: "Krak Grenade",
        Description: "Krak grenades and missiles use concentrated explosives to punch holes in armoured targets such as vehicles or bunkers. The shaped warheads makes them impractical for anti-personnel work.",
        location: [{
            owner: "storage",
            amount: 998
        }, {
            owner: "personalGear",
            amount: 2
        }]
    }, {
        Name: "Smoke Grenade",
        Description: "Smoke grenades release a dense cloud that obscures vision.",
        location: [{
            owner: "storage",
            amount: 998
        }, {
            owner: "personalGear",
            amount: 2
        }]
    }, {
        Name: "Demolition Charge",
        Description: "Such explosives are relatively easy to use, ideal for those whose devotion is greater than their technical expertise. They are frequently used in simple destruction against closed doors, obscuring walls, or valuable bridges or landing zones. The stats given represent a charge weighing 1kg (note that it is possible to rig multiple charges together, thus increasing their destructive capability). When a demolition charge explodes, anyone (or anything) caught within its blast radius takes 3d10 Explosive Damage plus an additional 1d10 Damage for every kilogram used. The blast radius of the charge is equal to the number of kilograms used times five metres. Demolition charges can even be thrown as an improvised (and risky) form of grenade.",
        location: [{
            owner: "storage",
            amount: 995
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Warp Staff",
        Description: "This rod of glimmering metal is studded with shining icons of might and engraved with runes that appear differently to every person that looks upon its length. Any psyker wielding a Staff will only suffer from Psychic Phenomena when they Push. When using psychic powers at the Unfettered level, every time the wielder would cause a Psychic Phenomenon, he adds his Psy Rating to the Damage of the next Psychic Power he uses. If the next Psychic Power would not deal Damage, this bonus is lost until the next Psychic Phenomenon would be caused.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Plasma Gun",
        Description: "The plasma gun is potent weapon capable of punching a glowing hole in almost any target, though they are dangerous to use and difficult to find. The ravaging energies held in check by the magnetic containment fields sometimes burst from their restraints a nd pour out of the weapon’s specialised cooling vents. Though the weapon itself remains intact, the unfortunate wielding it often does not prove as lucky. However, plasma weapons are so rare and valued it’s often better that the weapon survive than the wielder. ",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }],
    [{
        Name: "Legion Terminator Armour",
        Description: "Tactical Dreadnought or Terminator armour is the ultimate in personal armour. Originally designed for close quarters combat on board space hulks and other tight areas, Terminator armour is much more resilient than the more traditional power armour worn by Chaos Space Marines. A single suit of Terminator armour can turn an already formidable combatant into an unstoppable juggernauts of destruction.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Legion Power Armour",
        Description: "Power armour is the standard by which all forms of human protection are measured. The first forms of power armour were constructed in humanity’s distant past. However, during the time of the Great Crusade, the Emperor ensured to equip his Legions with power armour. When the Warmaster Horus rebelled and half the Legions joined him, they took their power armour with them. Power armour protects the wearer with massive ceramite plates, and offers not only superior defence, it also augments the user’s strength from electrically motivated micro-fibre bundles running along the ceramite plates.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Heavy Carapace ",
        Description: "Made of layered plates of armaplas, ceramite or other highly durable material, carapace armour is effective but generally heavy to wear. The stiff plates cannot easily cover flexible areas such as joints but offer significantly better protection than lighter kinds of armour.",
        location: [{
            owner: "storage",
            amount: 2
        }]
    }, {
        Name: "Power Armour ",
        Description: "Power armour is the standard by which all forms of human protection are measured. The first forms of power armour were constructed in humanity’s distant past. However, during the time of the Great Crusade, the Emperor ensured to equip his Legions with power armour. When the Warmaster Horus rebelled and half the Legions joined him, they took their power armour with them. Power armour protects the wearer with massive ceramite plates, and offers not only superior defence, it also augments the user’s strength from electrically motivated micro-fibre bundles running along the ceramite plates.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Conversion Field",
        Description: "Also known as Flare Fields, these work by converting the energy of an attack into blinding light, allowing them to negate much higher forces and delivering a disorientating visual blast as well. If the field blocks more than 12 points of Damage from a single attack, the release of light is strong enough to act as a photon flash grenade burst centred on the wearer. The character wearing the conversion field is unaffected by this burst of light.",
        location: [{
            owner: "storage",
            amount: 3
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }],
    [{
        Name: "Synskin",
        Description: "Synskin is a bio-reactive body glove with an inert non-reflective surface that moulds itself to the wearers form. It grants 2 armour points to all locations not already armoured and the wearer gains a +10 bonus to Stealth Tests. It also renders the wearer invisible to the use of infra-red goggles and Dark Sight.",
        location: [{
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Backpack",
        Description: "A regular carrying device worn with shoulder straps, these vary with style and form. Each can usually carry approximately 50 kilograms; Good and Best Craftsmanship versions can carry an additional 10 and 20 kg respectively.",
        location: [{
            owner: "storage",
            amount: 999
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Beguiling Gem",
        Description: "Any warrior foolish enough to take even a passing glance at the Beguiling Gem is instantly assaulted with visions and sensations from every debased vice imaginable. The mental assault is so excruciating that most find themselves unable to look away. Any opponent in melee with a Heretic who has a Beguiling Gem must pass a Difficult (–10) Willpower Test before he can take any Actions during his turn. If he fails, he cannot make any Actions but can make Reactions as normal. Once passed, the character has overcome the Gem and will not suffer its effects again that melee encounter. ",
        location: [{
            owner: "storage",
            amount: 1
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Rebreather",
        Description: "Rebreathers are designed to keep the wearer alive in even the most toxic atmospheres. Consisting of a mask or helmet, each contains an air supply and a character wearing a rebreather is immune to the effects of gases and can even survive underwater at limited depths. The air canisters last only for about one hour and then must be replaced, which takes a full action. Good Craftsmanship models last two hours while poor ones take two full actions to replace the canister. Replacement canisters are Scarce.",
        location: [{
            owner: "storage",
            amount: 999
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Cameleoline Cloak",
        Description: "Cameleoline material is made up of mimic fibres that blend the coloration of the wearer into their surroundings and are the garb of choice for snipers. A character wearing a cameleoline cloak gains a +20 bonus to Concealment Tests. If the wearer remains stationary, any Ballistic Skill tests to target him suffer a –30 penalty. ",
        location: [{
            owner: "storage",
            amount: 999
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Shrieking Soul",
        Description: "This rare and special trinket emits the piecing wails of its entrapped souls, such that the wearer is completely absorbed with the emotional waves crashing upon his psyche and ignores even his own injuries. As the Heretic slays new victims, it builds to a cacophonic crescendo that he can unleash as a devastating psychosonic blast.A Heretic with a Shrieking Soul ignores the effects of Fatigue, Stunning, and all Critical Damage except for those that cause death, limb loss, or blindness. Though he still takes Damage from being on Fire, he can ignore all other penalties it would impose. Each time the Heretic kills an opponent, the gem consumes the victim’s soul (should he have one) to a maximum containment of six. The consumed soul-energy can be released once per session in a Full Action, creating a psychic attack with a radius equal to 1d10 metres for each soul. All those not dedicated to Slaanesh within the shockwave must pass a Hard (–20) Willpower Test or become Stunned for 1d5 Rounds and suffer 1d10 permanent Willpower Damage. Only a Heretic with the Mark of Slaanesh can use a Shrieking Soul.",
        location: [{
            owner: "personalGear",
            amount: 1
        }]
    }],
    [{
        Name: "De-Tox",
        Description: "A common component in many combat kits, this powerful drug can negate the effects of most dangerous toxins if administered fast enough. A dose immediately ends the ongoing effects, both positive and negative, of any drugs, toxins or gases affecting the character (unless the effect states that de-tox is not effective against them).Using de-tox is both painful and debilitating, causing such unpleasant side effects as expulsion of fluids from almost every bodily orifice. Upon taking this drug, a character is stunned for a number of rounds equal to 1d10 minus his Toughness Bonus. A result of 0 or less means the character suffers no ill-effects.",
        location: [{
            owner: "storage",
            amount: 100
        }]
    }, {
        Name: "Frenzon",
        Description: "The generic name for a variety of combat drugs often used within penal legion units, frenzon is also used by underhive pitfighters and mercenary kill-teams. Once administered, the subject becomes fearless and fanatical in combat, gaining the Frenzy and Fearless Talents but also a –10 penalty to all Intelligence based tests. A single dose lasts for 1d10 minutes.",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Ligature Oils",
        Description: "Extracted from properly-sacrificed captives and brewed to specific standards, these liquids are highly prized by renegade technomats and Tech-Priests who have broken free of the oppressive cults of their brethren. If applied to a weapon (a Full Action) it will become immune to jamming for one game session. ",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Mortis",
        Description: "Mortis acts to shut down metabolic processes to a near death level, rendering the user a corpse to all but the most dedicated of examiners. Users who have taken Mortis are so near death for the following 4d10 minutes that any Tests to determine the user’s status suffer a –30 penalty, with failure indicating the user is dead. Good Craftsmanship doses can be administered so the user can specify how long they last (up to 1 hour), while Poor doses only offer a –10 penalty to Tests. ",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Plas",
        Description: "Most wastrels of the nobility use this biomorphic chemical to mildly alter their facial features for such frivolities as romantic assignation or humour. Others apply it in stronger doses to let them meld their flesh more painfully, rearranging the flesh into new forms and new identities for clandestine rendezvous’ or other more serious applications. When applied to the skin, plas softens it to the consistency of soft wax for roughly five minutes, allowing the user to reshape it into new forms. Multiple applications allow even the flesh underneath to be moulded but with intense pain. These will gradually ware off in 1d5 days causing pain proportional to the extent of modification. This gives the subject a +30 against any Perception tests to determine his true identity and also to fool anyone into believing the false one. Poor doses will only do +10 to the same, while Good Craftsmanship applications will last 1-10 days as desired. ",
        location: [{
            owner: "storage",
            amount: 104
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Rez",
        Description: "This unnatural drug is also known as resonate. Users emit a balm of soothing psychic energies, placating denizens of the aetheric realms and calming unruly Warp disturbances. Only few care to know how it is made, as only the most powerful of slain sorcerers can provide the raw ingredients. For it is their ground bones, especially from those who summoned but were consumed by daemons, that make up each dose. Rez requires an Easy (+30) Willpower Test to activate after taking a dose and lasts for a number of minutes equal to the Degrees of Success multiplied by 10. During that time the user may subtract 2d10 from any rolls on the Psychic Phenomena or Perils of the Warp tables. Failing the Willpower Test, however, immediately triggers Psychic Phenomena.",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Rose",
        Description: "Many a Chaos worshipper has had to depart from the strict confines of Imperial society as their desires for new sensations become too extreme. For such adventurers, Rose is the drug of choice, as it heightens all sensory input to a thrilling degree. The slightest touch becomes a razor’s caress, the softest whisper a sonic dagger of delight. A dose of rose lasts for roughly three hours. During that time the user gains the Dark Sight Trait and gains a +20 bonus to Perception based Tests. If the user ever passes a Test by five Degrees or more, however, he becomes overloaded by sensations and must take a Challenging (+0) Willpower Test or become Stunned for 1d5 rounds.",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Slaught",
        Description: "Also known as “onslaught,” this drug heightens awareness and improves reaction time, speeding up the user but causing fatigue and neural damage with prolonged use. A dose increases the user’s Agility Bonus and Perception Bonus by 3 for 2d10 minutes; after that the user must take a Challenging (+0) Toughness Test or take a –20 penalty to Agility and Perception Tests for 1d5 hours.",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Spur",
        Description: "Spur is a powerful stimulant that increases overall stamina, ideal for nasty firefights or assaults where a quick burst of energy is literally a lifesaver, but with a serious depressive crash occurring afterwards. Each dose lasts 2d10 minutes, during which the user cannot be Stunned and takes no Fatigue. Afterwards however the character takes –20 Penalty for Toughness and Agility Tests for one hour, as well as one Fatigue level for every two they would have received while the drug was active. Spur is very habit forming, and tests to withstand Addiction must be taken at a –10 penalty. ",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Stimm",
        Description: "Stimm provides short-term energy and stamina to users, allowing them overcome pain and bodily harm in order to keep fighting no matter what. Each dose of lasts 3d10 rounds and during this time a character ignores any negative effects to their characteristics from Damage or Critical Damage and cannot be stunned. When it wears off, the character takes a –20 penalty to Strength, Toughness and Agility Tests for one hour as their body recovers from the cumulative Damage.",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Barrage",
        Description: "Barrage enhances the users physical abilities to super-human levels for a short period of time but rapidly causes damage to the strained flesh. Effects: The Heretic gains Unnatural Strength (5) and Unnatural Toughness (5) for a number of rounds equal to his base Toughness Bonus. Side Effects: Once the effect has worn, off the Heretic suffers 1d5 temproary Strength and Toughness Damage and becomes Stunned for 1d5 rounds.",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Cursewine",
        Description: "Imbibed as part of dark rituals, Cursewine is an insane combination of dangerous chemicals and fine wine. The power of the mixed chemicals and alcohol reportedly grants the favour of the Warp, but the risk is incredibly high. Effects: Cursewine grants a +30 bonus to performing a Curse. Side Effects: Cursewine is extremely poisonous and, when ingested, the Heretic suffers 1d5 Energy Damage with the Toxic (3) Quality, ignoring Armour but not Toughness Bonus.",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Final Kiss",
        Description: "Distilled from the last gasps of chaste Imperial servants as they are slowly suffocated, Final Kiss has an exquisite bouquet of despair and desperation. Effects: Final Kiss counts as Good Craftsmanship alcohol that never causes drunkenness. It allows the Heretic to re-roll all failed Toughness Tests for a number of hours equal to half his Toughness Bonus. Side Effects: Final Kiss is not addictive.",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Manic",
        Description: "A favourite of depraved princelings, Manic induces exactly the emotional state its name suggests. Feelings and sensations become exaggerated and uncontrolled as the user feels a sense of boundless energy.Effects: The Heretic adds +30 to any Willpower Tests, ignores Fatigue, and cannot be Stunned or Pinned. These effects last for 3d10 minutes. Side Effects: Once the drug wears off, the Heretic falls unconscious for 1d5 hours unless he can pass a Hard (–20) Toughness Test.",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Sweep",
        Description: "Sweep is a bizarre chemical commonly used to cure addiction to other drugs. Ironically, Sweep is itself quite addictive, and dulls the senses of those who consume it. Effects: A single dose of Sweep allows the Heretic to remove any addictions he currently has. Note it does not eliminate any other side effects a drug may impart. Side Effects: The Heretic suffers –10 to all Agility and Perception Tests for 1d5 hours. Sweep addictions are twice as hard to remove than other addictions. Sweep cannot be used to cure an addiction to Sweep.",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Obscura",
        Description: "One of more common illegal narcotics, obscura is widespread due to the many smugglers and distributors operating across Imperial space any beyond. As an old and established drug, the effects have become standardised and are relatively dependable. Obscura can be ingested in a number of ways from injection, inhalation, skinpatch, and more. Obscura users enter a pleasant dream-like state for 1d5 hours (if required to engage in combat consider them under the effects of a hallucinogen grenade, see page 150). Once they wake, they enter a deep depression for 1d10 hours unless another dose of obscura is taken.",
        location: [{
            owner: "storage",
            amount: 5
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }],
    [{
        Name: "Auspex",
        Description: "The standard Imperial detection device, these are used to detect energy emissions, motion, biological life-signs, and other information. A character using an auspex gains a +20 bonus to Awareness Tests and may make a Tech-Use test to use it to spot things not normally possible to human senses such as invisible gases, nearby signs of life, non-visible radiation, or other things as specified. The standard range for an Auspex is 50m, though walls more than 50cm thick and certain shielding materials can block the scanner. Good Craftsmanship models increase the bonus to +30, but Poor Craftsmanship models can only penetrate 20cm of material.",
        location: [{
            owner: "storage",
            amount: 100
        }]
    }, {
        Name: "Combi-Tool",
        Description: "Most combi-tools are small compact devices, filled with fold-out and extending probes, blades, hooks, and socket-plugs ideal for coaxing operation from recalcitrant machinery, repairing damaged devices, and in general bending errant machine spirits to the will of the user. Using a combi-tool grants a +10 bonus to Tech-Use Tests.",
        location: [{
            owner: "storage",
            amount: 9
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Data-Slate",
        Description: "Flat and rectangular, data-slates are widespread throughout Imperial space and are used to store text and other media. Cheap versions can only hold a single file and cannot be altered, while superior slates can be reconfigured with different information from manual input or machine transmission and even transmit the data to other devices. Since they are seen throughout the Imperium, most authorities would never think to closely examine what information was actually on a slate carried by a “loyal” citizen in their daily business.",
        location: [{
            owner: "storage",
            amount: 999
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Disguise Kit",
        Description: "For those attempting to overthrow the hated Imperium, the ability to obscure true identity is very valuable. A good disguise kit can ensure a Heretic does not attract the improper attention and perhaps even throws suspicions towards others. Contents can range from basic makeup and prosthetic flesh appliances to elaborate skin dyes, vocal augmentors, and even f alse dermal layering to fool gene scanners. ",
        location: [{
            owner: "storage",
            amount: 9
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Medi Kit",
        Description: "Small, compact, and reliable, medi-kits are an essential part of anyone operating outside of Imperial society or away from easy access to medicae support. Each has a diagnostic cogitator complete with bio-scanner and probes, along with chemicals, drugs, and other means to treat a variety of injuries and ailments and will grant a +20 to those using it in conjunction with the Medicae Skill. Advanced models include such items as tox wands, synth-skin applicators, and other aids usually available only to the wealthiest of the Imperial elite. These gain the +20 bonus even if not possessing the Medicae Skill, but weight +3 kg and are Rare instead of Common",
        location: [{
            owner: "storage",
            amount: 999
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Signal Jammer",
        Description: "As the name suggests, this device acts to overpower local vox, data or other transmissions so that outsiders cannot receive them. Basic models are overt and obvious, such that the transmitting agencies will know they are being jammed. Sophisticated versions will emit precisely-tuned frequencies that dampen out transmissions without anyone detecting the action.",
        location: [{
            owner: "storage",
            amount: 9
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Torture Tools",
        Description: "Most Imperial servants are sadly recalcitrant when questioned and require persuading to give up information. A skilled questioner will call on his tools in cases such as these, blades of varying sharpness, needles of all sizes, chemicals and drugs, thermal drills, neural probes, and many other items to enhance the dialogue process. A character with a torture kit gains a +20 bonus to all Interrogation Tests.",
        location: [{
            owner: "storage",
            amount: 9
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Vox Caster",
        Description: "A vox is a standard and reliable communication device used to transmit over long distances, including to and from orbiting vessels. This allows communications with other who have vox-casters. Standard ranges are 100 kilometres, though higher Craftsmanship versions have longer ranges",
        location: [{
            owner: "storage",
            amount: 99
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Comm Leach",
        Description: "A heretical item unless properly consecrated by Mechanicus lackeys, a comm leach allows a Heretic to tap into vox signals or data transmissions. Advanced versions can copy broadcasts, allowing them to be hidden for later retrieval.",
        location: [{
            owner: "storage",
            amount: 9
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Forgery Kit",
        Description: "The perfect accessory for a disguise kit, this can help get a Heretic through the most oppressive of Imperial security checks or be used to create “newly found” documents discrediting their simpering saints. They can be used to alter ident cards, create fake work orders, or even produce travel slates allowing transport across the Imperium on official business. ",
        location: [{
            owner: "storage",
            amount: 4
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Demolition Kit",
        Description: "These kits are filled with all manners of supplies and materials for crafting explosives, including timers such as detcord and det-tape along sensory systems to trigger the explosion. In the hands of an expert, there are few Imperial installations that can withstand what such a kit can produce. Each kit includes supplies for five demolition charges, five binary charges, 100 meters of det-cord that burns at a rate of one metre per 10 seconds, and five simple pressure-release detonators. Good Craftsmanship kits include variable burn det-cord and advanced detonators that can trigger from motion or thermal imaging. ",
        location: [{
            owner: "storage",
            amount: 95
        }, {
            owner: "personalGear",
            amount: 5
        }]
    }, {
        Name: "Scrap Code Generator",
        Description: "Highly dangerous to possess, this mechanism is tech-heresy of the most wondrous kind. When coupled with most sanctified Imperial machine spirits, it will inflict electronic virus-patterns into the datacurrents, disrupting the currents and inducing electronic seizures. The shattered remnants of the machine spirit can be reformatted into a more pliable and useful configuration, with new loyalties and functions. This device requires a Hard (–20) Tech-Use Test, but if successful the machine operated on will give up its secrets and obey commands in the future with only a Simple (+40) Tech-Use Test.",
        location: [{
            owner: "storage",
            amount: 9
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Psy Focus ",
        Description: "Also known as warp-totems or mind-eyes, a psy-focus allows those blessed with Warp powers to more easily channel their powers. It could be an ancestral bone, irradiated crystal, the twisted metal shrapnel fragment removed from a murdered spouse, or even an otherwise unremarkable object normally found anywhere. But in the hands of a psyker ready to use his powers against an Imperium that would sentence him to death or worse, the item is a mighty accessory. When a psyker with a psy-focus makes a Focus Power Test (see Chapter VI: Psychic Powers, page 208) he gains a +10 bonus.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Psychic Hood ",
        Description: "Psychic Hoods are ancient and arcane devices that allow a psyker protection against psychic attacks through networks of psychically-attuned crystals woven into the material surrounding the wearer’s cranium. They are primarily integrated into Power or Terminator armour, though some are worn simply as a helmet or elaborate headdress. A Heretic wearing one may spend his Reaction to attempt to nullify a power used by another psyker within a range in meters equal to the character’s Willpower, said Reaction to be announced before the other psyker has made his Focus Power roll. The wearer first makes a Focus Power (Willpower) Test, with every Degree of Success imposing a –10 penalty on the enemy’s Focus Power Test. Alternatively the wearer may try to nullify a power that affects him directly, no matter the range. He makes the same test as before, and if successful is unaffected by the power but other targets or areas are affected as normal by the power. Note that a nullification test may trigger psychic phenomena based on the Psychic Strength as normal. The hood also grants the wearer a +5 bonus to all Focus Power Tests, including nullification attempts as described above.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Golden Eye of Tzeench ",
        Description: "Golden Eyes of Tzeentch are purported to be fossilised eyes of a powerful Tzeentchian daemon, and are said to be able to gaze beyond the mortal realms of life and death. Those lucky enough to possess one can link his own foresight to the orb. Using a Golden Eye requires a free hand, as the user grips the small container tightly. As a Free Action, the user may make a Challenging (+0) Willpower Test, and for every Degree of Success gains +10 to any Evasion or Opposed Stealth Tests until the start of his next Turn. A Golden Eye of Tzeentch will only function when the owning character is dedicated to Tzeentch.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Helmet Augments",
        Description: "While a basic helmet will offer simple cranial protection, specific upgrades can also add advanced vox links, targeting feeds, visual augmentations, combat data readouts, and more. These can include the benefits of wearing such items as preysense goggles, a rebreather, photo-visor, vox-caster, or micro-bead, with standard upgrades containing all but preysense goggles. Good Craftsmanship models contain the goggles as well, while the user can only choose two of the above for Poor models. ",
        location: [{
            owner: "storage",
            amount: 1000
        }]
    }, {
        Name: "Injector",
        Description: "Most specialised drugs are not in easy-to-take pill form and require injectors; these can take many forms from cheap low-tech disposable syringes up to sophisticated hypo-sprays and even bio-attuned skin patches. An injector can hold one dose of any drug, which a character may administer as a Half Action.",
        location: [{
            owner: "storage",
            amount: 9
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Magnoculars",
        Description: "Even for those who see clearly amidst the smoke and lies of the Imperium, there are times for aids to vision. Magnoculars offer aid in long distance imaging, with advanced models also providing ranges, heat signatures, target positions, and even pic snapshots for later analysis. ",
        location: [{
            owner: "storage",
            amount: 9
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Stummer",
        Description: "The reverse of a screamer but more advanced, these analyse nearby ambient sound, generate dampening waves to cancel out those same noises. An active stummer grants a +30 bonus to Silent Move Tests for about 20 minutes of continuous use before it needs recharging (taking about one hour).",
        location: [{
            owner: "storage",
            amount: 9
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Multikey",
        Description: "A multikey is the perfect accompaniment for any Heretic seeking entrance to locked Imperial doors, the better to pry away the secrets hidden behind them. Multikeys can open almost all standard locks, making then illegal for most citizens to possess for understandable reasons and meaning most are carefully hidden away in boot heals or cloak padding. A Heretic using a multikey gains a +20 bonus to any Security Test when trying to open locks. There are no varying Craftsmanships of this item.",
        location: [{
            owner: "storage",
            amount: 4
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Q'Sal Crystal Spire",
        Description: "No more than a metre high, a Q’Sal Crystal Spire consists of a pointed shard of flawless blue crystal set in a rune-encrusted mounting. Once activated, for a brief period of time the barrier between the Immaterium and the material universe weakens slightly. Activating a Q’Sal Crystal Spire is a Half-Action and, once active, all Focus Power Tests and all Tests made as part of a Ritual within 20m of the spire are considered to be two levels easier. This increases by one level for every additional active spire within 20m of another active spire. Additionally, all rolls on the Psychic Phenomena Table add +20 to the roll, with a further +10 for every active spire after the first within 20m of another active spire. If this roll causes a Perils of the Warp result, the spire closest to the character that caused this result explodes (D10+5 E; Pen 5; Blast (5)), destroying it completely.",
        location: [{
            owner: "storage",
            amount: 4
        }]
    }],
    [{
        Name: "Embedded Auspex",
        Description: "Expanding the realms of the senses is a common desire and this implant allows a Heretic a glimpse at what rewards true devotion might bring. Concentrating (a Half Action) allows the user to duplicate the effects of special sensory system. Common implants function as a standard Auspex (see page 184). Poor models offer only a single detection ability (either heat, harmful radiation, or electromagnetic fields) with only a 20m range. Good systems act as a full Auspex but also allow a re-roll on Perception based tests when it is in use. ",
        location: [{
            owner: "storage",
            amount: 1
        }, {
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Nerve Induction Tines",
        Description: "Thin flexible metal spikes are implanted underneath the fingernails, where they can emerge to a length of 5cm. Their nano-sharp ends enclose electrochemical induction ports, and can slice into skin to reach vulnerable nerves underneath to create excruciating pain or pleasure. This grants the user +20 to Interrogation Tests against prone or restrained subjects or alternatively +20 to Charm Tests against the same.",
        location: [{
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Pheromone Generator",
        Description: "A combination of biological glands and injection systems, this implant allows the user to exude unseen but powerful chemicals into the air through modified sweat glands on a Routine (+20) Willpower Test. Charm Tests will gain a +10 bonus, rising to +20 if the test is taken in an enclosed area with little or no strong air movement.",
        location: [{
            owner: "personalGear",
            amount: 1
        }]
    }, {
        Name: "Bionic Arm",
        Description: "One of the more common replacement limbs to be found, Common Craftsmanship versions ape a normal hand and arm exactly, retaining strength, dexterity and sense of touch. Poor Craftsmanship versions are more cumbersome and visibly artificial; halve the owner’s Agility score where matters of fine dexterity are involved. In addition, Weapon Skill and Ballistic Skill Tests made when using the limb take a –5 penalty. Good bionic arms improve on natural design and provide a +10 bonus on Agility Tests requiring delicate manipulation. Best Craftsmanship arms add a +10 bonus to Strength Tests using the arm and can be used to store small items such as pistol ammo clips inside concealed interior compartments. ",
        location: [{
            owner: "storage",
            amount: 6
        }]
    }, {
        Name: "Bionic Legs",
        Description: "In the basic common version, locomotion bionics are fully integrated into the hip with spinal link and allow a Heretic to walk, run, and climb at human norm levels. Poor Craftsmanship models, however, are lumbering affairs that reduce a Heretic’s movement rate by one (rounding up), and when running the user must succeed on an Agility Test or fall at the end of his movement. Good Craftsmanship level artificial legs grant the owner the Sprint Talent and add a +20 bonus to Athletics Tests made to jump or leap.",
        location: [{
            owner: "storage",
            amount: 3
        }]
    }, {
        Name: "Bionic Respiratory System",
        Description: "Bionic respiratory systems are often a must due to damage caused by the often exceedingly toxic atmospheres to be found in many settings. Common Craftsmanship bionic lungs and implanted respiratory systems allow the user to breathe as normal and gain a +20 bonus to Toughness Tests made to resist airborne toxins and gas weapons. Poor bionic lungs offer the same benefits as the Common system, but require louder mechanical filtration systems and users suffer a –20 penalty to all Silent Move checks. They are also overall less effective in blood oxygenatation and all tests involving strenuous physical activity are increased by one level of difficulty. Good bionic lungs count as a full life support system, so if for any reason the user’s own respiratory system fails, his bionic lungs will keep his blood oxygenated. These systems are generally unnoticeable when designed to be so. ",
        location: [{
            owner: "storage",
            amount: 3
        }]
    }, {
        Name: "Interface port",
        Description: "The Heretic now has a mechanical port implanted in his body, commonly in the rear of the neck, which can be connected to machines via his own data ports. This allows the user faster and smoother access to the valuable information within, and grants a +10 bonus to Common Lore, Inquiry, or Tech-Use Tests whilst connected to a relevant mechanism or data spool.",
        location: [{
            owner: "storage",
            amount: 2
        }]
    }, {
        Name: "MIU ",
        Description: "Also known as sense-links, these arcane implants allow direct interface with a machine or technological device. A basic MIU rig involves a single spinal or cortex connector, while the advanced variant will also include wrist connector probes (and possibly mechadendrite connectors) in addition to the flesh plug.Common models add a +10 bonus to Tech-Use, Pilot or Drive Tests used in conjunction with devices capable of MIU linking. Poor systems are not properly tuned to the user’s brainwaves and require a successful Willpower Test to use. They impose a –10 penalty when attempting to interface with the device. Good models, however, are perfectly tuned and the user feels the interfaced devices as if they were parts of their own body, even to specially modified weapons. They grant a +10 bonus to Tech-Use, Pilot, Drive, Logic, Inquiry and Weapon Skill Tests when interfaced with MIU systems.",
        location: [{
            owner: "storage",
            amount: 3
        }]
    }, {
        Name: "Cerebral Implants",
        Description: "Commonly used to repair a severely damaged brain or hopefully augment its abilities, these often risky implant systems represent a major step from simply replacing a limb to altering a Heretic from human to mechanism. Common-level implants can restore paralysed and brain-damaged users to a semblance of normality, but with a permanent loss of 1d10 points from the character’s Weapon Skill, Ballistic Skill, Agility, Intelligence and Fellowship. Poor versions restore brain function but destroy the personality and memories of the subject, rendering them no better than a servitor, and as such are unsuitable for player characters (though a Heretic may encounter many an unfortunate fellow Chaos worshipper who has suffered such a fate). Good cerebral implants are very rare even among the elite and powerful, and are exceedingly difficult to arrange, becoming Near Unique in availability. These bestow Unnatural Intelligence (+2) (see page 144) and grants +20 bonuses to Logic and Lore Tests for the superior mental capabilities they now enjoy.",
        location: [{
            owner: "storage",
            amount: 2
        }]
    }, {
        Name: "Cranial Armour",
        Description: "Microstrips of plasteel are bonded directly to the skull in subdermal layers, allowing for extra protection against head injury. Common Craftsmanship armour grants the user one extra Armour Point in the head location. Poor versions do the same, but permanently reduce the wearer’s Intelligence Characteristic by one due to the screws driven into the skull.Good Craftsmanship armour grants +1 AP and also subtract one from any Critical Effects to the head",
        location: [{
            owner: "storage",
            amount: 3
        }]
    }, {
        Name: "Skeletal Petrifaction",
        Description: "More a chemical treatment than an implant, metallic fluids are injected into bone marrow in a series of painful operations. The skeletal system incorporates them into the bone structure, making them heavier, stronger, and more damage resistant. A Heretic so altered gains the Bulging Biceps and (often literally) Iron Jaw Talents, and gains a +2 bonus to Damage for all unarmed attacks.",
        location: [{
            owner: "storage",
            amount: 3
        }]
    }, {
        Name: "Black Blood",
        Description: "A combination of microtech from the Dark Ages and obscene xenos biotech flows though veins now forever tainted. The minions of the Omnissiah refer to this as Autosanguine, but those who call themselves the Dark Mechanicus know it as Black Blood. Too small to see but powerful in their vast numbers, these machines can repair minor injuries and speed healing. When applying healing the Heretic is always considered Lightly Wounded; he also heals much faster than mere mortals and removes two points of Damage per day.",
        location: [{
            owner: "storage",
            amount: 3
        }]
    }, {
        Name: "Cybernetic Senses",
        Description: "Most human senses can be artificially duplicated, allowing radiation ruined eyes or eardrums ruptured by concussion blasts to be replaced. Some Heretics even attempt to improve on their natural abilities or create new ones via these artificial implants, to further delve into new realms of sensation. Common systems are usually obviously artificial and often oversized (especially optical implants) but duplicate the approximate human range of senses adequately with no further game effects.Poor cybernetic senses are inferior to base humanity’s level, often with static in the hearing, failures in colour vision, or taste buds that make everything taste like cloth. Users must take a –20 penalty to tests made involving the cybernetic sense. Good Craftsmanship implants grant the Heightened Senses Talent for that particular sense, and a +20 bonus to tests made to resist attacks on the sense itself (such as deafening noises or blinding flashes). Basic and advanced cyber-eyes may also incorporate telescopic sights (counting as a telescopic sight, see page 170 for more details), a full photo-visor, and/or a system allowing the Dark Sight trait (see page 140). Likewise basic or advanced cybernetic hearing may also include an internal micro-bead system. Each of these “extra” upgrades counts as a separate implant for the purposes of acquisition.",
        location: [{
            owner: "storage",
            amount: 6
        }]
    }, {
        Name: "Ferric Lure",
        Description: "Powerful electromagnets are implanted in the Heretic, allowing him to cast forth a net of invisible energy as a Full Action requiring a successful Challenging (+0) Willpower Test and call an unsecured metal object into his hand. The object cannot mass more than 1kg per point of Willpower Bonus and must be within 20 metres, and the user must already have Mechanicus Implants for this system to function.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Flesh Replenishment",
        Description: "This implant system allows a Heretic to reinvigorate themselves by drawing on the energies of external machines. When in contact with a functioning machine, fully-charged battery, or other power source, the subdermal induction ports can allow the user to siphon off energy into their own body by making a Toughness Test with a +10 bonus. Success removes one level of Fatigue plus one additional level for each additional Degree of Success as the power energises neural and muscle tissue, or alternatively can recharge their Internal Reservoir if they have that implant as well.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Internal Reservoir",
        Description: "This implant acts as a powerful battery, storing energy for various implants and especially for functions that require energy to be expelled in rapid or violent fashions. When fully charged, the user will no longer gain fatigue from using Luminen Capacitors either to recharge something or offensively, but each use of those implants drains the reservoir by 50%. The battery will be full recharged after one day of resting.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Luminen Capacitor",
        Description: "The Heretic’s internal energies, either through biological or artificial sources, are channelled into capacitors buried into the flesh where they can be tapped to recharge items or even released in devastating attacks. With a successful Toughness Test, the character may recharge or power machinery. This requires one minute of mental focus and meditation. The difficulty of the Toughness Test varies depending on the nature of the powered system.\n• Ordinary (+10): Simple Power Cell, Illuminator\n• Challenging (+0): Weapon Charge Pack, Data-Slate, Bridge Terminal\n• Difficult (–10): Shuttle electronics, Servo-Skull\n• Hard (–20): Lascannon Charge Pack, Servitor, Bridge Hololith\n• Very Hard (–30): Cogitator Core, Reactor Machine Spirit, Xenos Technology\nThe device call also be used offensively, however it requires Talents to use properly (see page 127). Only a Heretic with Mechanicus Implants may use this device. Poor Craftsmanship variants impose a –10 penalty to all Toughness Tests made to use them (in effect, the Toughness Tests become one Degree more difficult). Good Craftsmanship variants grant a +10 bonus to all Toughness Tests made to use them (in effect, making the Tests one Degree easier).",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Maglev Coils",
        Description: "Archeotech systems of powerful gravimetric coils are implanted in the body, allowing the user to become unshackled from gravity’s grasp for short periods. Using a Half Action, the user may hover 20-30 centimetres off the ground for a number of minutes equal to 1d10 plus the character’s Toughness Bonus. The character must employ a Half Action each round to concentrate operating this implant and may use the other action to move normally. The character can slow their rate of descent when falling so long as this implant is active when the character reaches the ground, reducing all falling Damage to 1d10+3 Impact. Each time the character activates the coils, it drains the stored power and cannot be used again until recharged (taking one day)",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Synthmuscle",
        Description: "Ropey strands of vat-grown muscle tissue, thick with slurried nutrients and laced with flakweave, are woven into existing muscle groups granting increased strength of varying levels. Heretics gain Unnatural Strength 1; Best Craftsmanship grafts grant Unnatural Strength 4 but also impose a -10 to any Agility Tests due to the newly misshapen and unnatural body shape.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Servo Arm",
        Description: "Utilised by the renegade Mechanicus Hereteks, these massive manipulators contain powerful crushing pincers designed for field repairs but also useful in combat as well. Each is integrated into the user’s armour to offset the heavy weight and power requirements. A Servo-Arm can extend up to 1.5m from its shoulder or back mounting and has a fixed Strength value of 75 with Unnatural Strength (+7) – the user always uses this, no matter his own Strength or any other factors. The powerful mandibles allow him to lift heavy objects or tether himself to a suitable anchor as a Free Action. Against Imperial foes, a servo-arm is as mighty in battle as it is useful in repairs. The Heretic may strike with it as his Reaction for the round or use it to make a Standard Attack (so long as it is only used once per round). It hits using his Weapon Skill, dealing 2d10+14 Impact Damage with Pen 10. Exceptional Craftsmanship from Heretek artisans (Best Craftsmanship versions) can improve the model, increasing the Strength to 85 (increasing Damage to 2d10+15) and granting +10 to any Grapple Tests.",
        location: [{
            owner: "storage",
            amount: 2
        }]
    }, {
        Name: "Manipulator Mechadendrite ",
        Description: "Possibly the most common form of mechadendrite, this artificial limb is a great aid to those working in industrial or technical areas and allows a Heretic to lift greater weights and more easily operate industrial gear. It can extend out to 1.5m and grants the user +20 to Strength Tests; the viscous gripping and crushing pincers can also tether the user to gantries or suitably heavy objects as a Free Action. The heavy metal pincers may be used in combat to make melee attacks. The Heretic may strike with it as his Reaction for the round or use it to make a Standard Attack (so long as it is only used once per round). The Manipulator Mechadendrite deals 1d10+2 I Damage. While powerful, the manipulator is not subtle and attempts to use it for such tasks as data-slate typing, inscribing sacrificial etchings, handling delicate objects, or the like will only end with ruined equipment or failed summoning.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Medicae Mechadendrite",
        Description: "Made of thin, dextrous, two-metre tubes of metal and plasteel tipped with a variety of fascinating needles and blades, this mechadendrite can either heal or harm depending on a Heretic’s intent. In most cases it can provide medical and surgical assistance, granting a +10 bonus to Medicae Tests. It houses six injector pistons; each may be filled with one dose of a drug and must be supplied and replaced separately (these can also be used to inject the user). Built-in flesh staplers may be used to staunch blood loss as a Half Action while the chainscalpel attachment reduces the difficulty of limb amputation to Challenging (+0) and deals 1d5 Rending Damage in combat, acting as an Improvised weapon. For those more interested in answers than mending, the blades and needles grant the user +10 bonus to Interrogation Tests. This mechadendrite may be shoulder or sternum mounted and the Heretic must have the appropriate Mechadendrite Use Talent for operation.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Utility Mechadendrite",
        Description: "This 2m mechadendrite incorporates a selection of useful tools and attachments, counting as a combi-tool and granting a +10 bonus to all Tech-Use Tests. It also contains six injector pistons each filled with one dose of Ligature Oil; these must be supplied and replaced separately. The limb is fitted with a Censer (see page 169), allowing it to billow fumes every 15 minutes with effects depending on the acquired ingredients. This can alternatively belch smoke clouds that may be employed in melee combat to distract and choke, imposing a –5 penalty to Weapon Skill Tests made by all living creatures within a two-metre radius for one round. This is a Half Action. Unless the censer is deactivated, all Perception Tests relying on a sense of smell made to detect the Heretic gain a +10 bonus. Also useful in combat is the cutting blade found at the end of one tip, counting as a knife with the Defensive Quality and Mono upgrade.",
        location: [{
            owner: "storage",
            amount: 1
        }]
    }, {
        Name: "Dendrite Blade",
        Description: "A lethal weapon that seems to act on its own volition, Dendrite Blades consist of many linked metallic coils each ending in a serrated blade or wickedly sharp hook. They whip around the bearer, almost as if seeking out prey.Each Dendrite Blade is a Mechadendrite, and a Heretic must have the Mechadendrite Use (Weapon) Talent to gain its benefits. Whenever an enemy makes a Melee Attack against a Heretic equipped with one or more Dendrite Blades, he suffers a –10 penalty on his Weapon Skill Test for each Dendrite Blade the Heretic has equipped (to a maximum of –30). If the attacker fails his Weapon Skill Test by three or more Degrees of Failure, the attacker immediately suffers 1 automatic hit with the listed profile, plus 1 additional hit per Degree of Failure beyond the third (to a maximum equal to the number of Dendrite Blades the character has equipped). Additionally, a Heretic with one or more Dendrite Blades always counts as being armed with a weapon with the listed Weapon Profile. He must have the Mechadendrite Use (Weapon) Talent to wield a Dendrite Blade without penalty.",
        location: [{
            owner: "storage",
            amount: 4
        }]
    }, {
        Name: "Mechatendril",
        Description: "Equal parts tool and weapon, Mechatendrils snake restlessly around Hereteks and Warpsmiths as they seek out new tasks to complete. Used for complex repairs as well as combat, the versatility of the Mechatendrils make them invaluable if temperamental assets to those that reject the Omnissiah.Each Mechatendril is a Mechadendrite that grants the Heretic an additional +5 bonus on Crafting Skill Tests (see page 92 of the Black crusade Core Rulebook). A Heretic must have the Mechadendrite Use (Utility) Talent to gain this benefit.Additionally, a Heretic with one or more Mechatendrils always counts as being armed with a weapon with the listed Weapon Profile. He must have the Mechadendrite Use (Weapon) Talent to wield a Mechatendril without penalty",
        location: [{
            owner: "storage",
            amount: 4
        }]
    }, {
        Name: "Mechanicus Assimilation",
        Description: "This process is used either by the truly fanatical or the devastatingly injured, the user’s body is rebuilt with interlaced bionic replacements, augmenting and supporting the biological systems. Now almost as much metal as flesh, the Heretic gains the Machine Trait (see page 141) with Armour points equal to the number of times this replacement upgrade is acquired. When taken multiple times, note the number, as in “Mechanicus Assimilation 3” when taken three times. There are no Poor Craftsmanship versions of cybernetic, and Good and Best Craftsmanship versions simply make the upgrade less noticeable. Hereteks count this upgrade as Rare, as opposed to Extremely Rare.",
        location: [{
            owner: "storage",
            amount: 10
        }]
    }]
];

gear.forEach(function (gearType, gearIndex) { //fill in gear section
    'use strict';
    gearType.sort(function (a, b) {
        return a.Name > b.Name;
    }).forEach(function (current) {
        locations.forEach(function (loc) {
            var item = document.createElement("span");
            if (current.location.filter(function (c) {
                return c.owner === loc;
            }).length !== 0) {
                item.innerText = current.Name + "(" + current.location.filter(function (c) {
                    return c.owner === loc;
                })[0].amount + "), ";
                item.title = current.Description;
                document.querySelectorAll("#" + loc + " .gearContent")[gearIndex].appendChild(item);
            }
        });
    });
});

locations.forEach(function (c) { //removes trailing commas in gear section
    'use strict';
    var i;
    var gearLines = document.querySelectorAll("#" + c + " .gearContent");
    for (i = 0; i < 6; i += 1) {
        if (gearLines[i].lastChild) {
            gearLines[i].lastChild.innerText = gearLines[i].lastChild.innerText.substring(0, gearLines[i].lastChild.innerText.length - 2);
        }
    }
});