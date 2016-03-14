// http://www.enchantedlearning.com/wordlist/adjectivesforpeople.shtml
// http://www.enchantedlearning.com/wordlist/negativewords.shtml
// ??? http://www.enchantedlearning.com/wordlist/people.shtml ???
// http://www.enchantedlearning.com/wordlist/interjections.shtml

var adjectives = {};
adjectives.personal = ['able', 'abnormal', 'absent-minded', 'above-average', 'adventurous', 'affectionate', 'agile', 'agreeable', 'alert', 'amazing', 'ambitious', 'amiable', 'amusing', 'analytical', 'angelic', 'apathetic', 'apprehensive', 'ardent', 'artificial', 'artistic', 'assertive', 'attentive', 'average', 'awesome', 'awful', 'balanced', 'beautiful', 'below average', 'beneficent', 'blue', 'blunt', 'boisterous', 'brave', 'bright', 'brilliant', 'buff', 'callous', 'candid', 'cantankerous', 'capable', 'careful', 'careless', 'caustic', 'cautious', 'charming', 'childish', 'childlike', 'cheerful', 'chic', 'churlish', 'circumspect', 'civil', 'clean', 'clever', 'clumsy', 'coherent', 'cold', 'competent', 'composed', 'conceited', 'condescending', 'confident', 'confused', 'conscientious', 'considerate', 'content', 'cool', 'cool-headed', 'cooperative', 'cordial', 'courageous', 'cowardly', 'crabby', 'crafty', 'cranky', 'crass', 'critical', 'cruel', 'curious', 'cynical', 'dainty', 'decisive', 'deep', 'deferential', 'deft', 'delicate', 'demonic', 'dependent', 'delightful', 'demure', 'depressed', 'devoted', 'dextrous', 'diligent', 'direct', 'dirty', 'disagreeable', 'discerning', 'discreet', 'disruptive', 'distant', 'distraught', 'distrustful', 'dowdy', 'dramatic', 'dreary', 'drowsy', 'drugged', 'drunk', 'dull', 'dutiful', 'eager', 'earnest', 'easy-going', 'efficient', 'egotistical', 'elfin', 'emotional', 'energetic', 'enterprising', 'enthusiastic', 'evasive', 'even-tempered', 'exacting', 'excellent', 'excitable', 'experienced', 'fabulous', 'fastidious', 'ferocious', 'fervent', 'fiery', 'flabby', 'flaky', 'flashy', 'frank', 'friendly', 'funny', 'fussy', 'generous', 'gentle', 'gloomy', 'glutinous', 'good', 'grave', 'great', 'groggy', 'grouchy', 'guarded', 'hateful', 'hearty', 'helpful', 'hesitant', 'hot-headed', 'hypercritical', 'hysterical', 'idiotic', 'idle', 'illogical', 'imaginative', 'immature', 'immodest', 'impatient', 'imperturbable', 'impetuous', 'impractical', 'impressionable', 'impressive', 'impulsive', 'inactive', 'incisive', 'incompetent', 'inconsiderate', 'inconsistent', 'independent', 'indiscreet', 'indolent', 'indefatigable', 'industrious', 'inexperienced', 'insensitive', 'inspiring', 'intelligent', 'interesting', 'intolerant', 'inventive', 'irascible', 'irritable', 'irritating', 'jocular', 'jovial', 'joyous', 'judgmental', 'keen', 'kind', 'lame', 'lazy', 'lean', 'leery', 'lethargic', 'level-headed', 'listless', 'lithe', 'lively', 'local', 'logical', 'long-winded', 'lovable', 'love-lorn', 'lovely', 'maternal', 'mature', 'mean', 'meddlesome', 'mercurial', 'methodical', 'meticulous', 'mild', 'miserable', 'modest', 'moronic', 'morose', 'motivated', 'musical', 'naive', 'natural', 'nervous', 'noisy', 'normal', 'nosy', 'numb', 'obliging', 'old-fashioned', 'one-sided', 'orderly', 'ostentatious', 'outgoing', 'outspoken', 'passionate', 'passive', 'paternal', 'paternalistic', 'patient', 'peaceful', 'peevish', 'pensive', 'persevering', 'persnickety', 'petulant', 'picky', 'plain', 'plain-speaking', 'playful', 'pleasant', 'plucky', 'polite', 'popular', 'positive', 'powerful', 'practical', 'prejudiced', 'pretty', 'proficient', 'proud', 'provocative', 'prudent', 'punctual', 'quarrelsome', 'querulous', 'quick', 'quick-tempered', 'quiet', 'quirky', 'realistic', 'reassuring', 'reclusive', 'reliable', 'reluctant', 'resentful', 'reserved', 'resigned', 'resourceful', 'respected', 'respectful', 'responsible', 'restless', 'revered', 'ridiculous', 'sad', 'sassy', 'saucy', 'sedate', 'self-assured', 'selfish', 'sensible', 'sensitive', 'sentimental', 'serene', 'serious', 'sharp', 'short-tempered', 'shrewd', 'shy', 'silly', 'sincere', 'sleepy', 'slight', 'sloppy', 'slow', 'smart', 'snazzy', 'sneering', 'snobby', 'somber', 'sober', 'sophisticated', 'soulful', 'soulless', 'sour', 'spirited', 'spiteful', 'stable', 'staid', 'steady', 'stern', 'stoic', 'striking', 'strong', 'stupid', 'sturdy', 'subtle', 'sullen', 'sulky', 'supercilious', 'superficial', 'surly', 'suspicious', 'sweet', 'tactful', 'talented', 'testy', 'thinking', 'thoughtful', 'thoughtless', 'timid', 'tired', 'tolerant', 'touchy', 'tranquil', 'ugly', 'unaffected', 'uncertain', 'versatile', 'vigilant', 'warm', 'warmhearted', 'wary', 'watchful', 'weak', 'well-behaved', 'well-developed', 'well-intentioned', 'well-respected', 'well-rounded', 'willing', 'wonderful', 'volcanic', 'vulnerable', 'zealous' ];

adjectives.negative = ['abysmal', 'adverse', 'alarming', 'angry', 'annoying', 'anxious', 'apathetic', 'appalling', 'atrocious', 'awful', 'bad', 'banal', 'barbed', 'belligerent', 'boring', 'broken', 'callous', 'clumsy', 'coarse', 'cold', 'cold-hearted', 'collapsed', 'confused', 'contradictory', 'contrary', 'corrosive', 'corrupt', 'crazy', 'creepy', 'criminal', 'cruel', 'cutting', 'dead', 'decaying', 'devouring', 'damaging', 'dastardly', 'deplorable', 'depressed', 'depraved', 'deformed', 'despicable', 'detrimental', 'dirty', 'diseased', 'disgusting', 'disheveled', 'dishonest', 'dishonorable', 'dismal', 'distressing', 'dreadful', 'dreary', 'drunk', 'enraged', 'eroding', 'evil', 'fail', 'faulty', 'fearful', 'feeble', 'filthy', 'foul', 'frightening', 'frightful', 'gawky', 'ghastly', 'grave', 'greedy', 'grim', 'grimacing', 'gross', 'grotesque', 'gruesome', 'guilty', 'haggard', 'hard', 'hard-hearted', 'harmful', 'hateful', 'hideous', 'homely', 'horrendous', 'horrible', 'hostile', 'hungry', 'hurtful', 'icky', 'ignorant', 'ill', 'immature', 'imperfect', 'impossible', 'inane', 'inelegant', 'infernal', 'injurious', 'insane', 'insidious', 'insipid', 'jealous', 'junky', 'lost', 'lousy', 'lumpy', 'malicious', 'mean', 'menacing', 'messy', 'misshapen', 'missing', 'misunderstood', 'moaning', 'moldy', 'monstrous', 'naive', 'nasty', 'naughty', 'negate', 'negative', 'never', 'nobody', 'nondescript', 'nonsense', 'noxious', 'objectionable', 'odious', 'offensive', 'old', 'oppressive', 'painful', 'perturb', 'pessimistic', 'petty', 'plain', 'poisonous', 'prejudiced', 'questionable', 'quick-tempered', 'quirky', 'ravenous', 'rejecting', 'repellant', 'reptilian', 'repulsive', 'repugnant', 'revenge', 'revolting', 'rocky', 'rotten', 'rude', 'ruthless', 'sad', 'savage', 'scare', 'scary', 'scream', 'selfish', 'severe', 'shoddy', 'shocking', 'sick', 'sickening', 'sinister', 'slimy', 'slothful', 'slovenly', 'smelly', 'sobbing', 'sorry', 'spiteful', 'sticky', 'stinky', 'stormy', 'stressful', 'stuck', 'stupid', 'substandard', 'superficial', 'surly', 'suspect', 'suspicious', 'tactless', 'tense', 'terrible', 'terrifying', 'threatening', 'ugly', 'undermining', 'unbalanced', 'uncooperative', 'undependable', 'unemotional', 'unfriendly', 'unguarded', 'unhelpful', 'unimaginative', 'unmotivated', 'unpleasant', 'unpopular', 'unreliable', 'unsophisticated', 'unstable', 'unsure', 'unthinking', 'unwilling', 'venal', 'unfair', 'unfavorable', 'unhappy', 'unhealthy', 'unjust', 'unlucky', 'unpleasant', 'upset', 'unsatisfactory', 'unsightly', 'untoward', 'unwanted', 'unwelcome', 'unwholesome', 'unwieldy', 'unwise', 'upset', 'vicious', 'vile', 'villainous', 'vindictive', 'volcanic', 'voracious', 'wary', 'weary', 'wicked', 'woeful', 'worthless', 'wounded', 'yelling', 'yucky', 'zero' ];

var interjections = [ 'aah', 'ack', 'agreed', 'ah', 'aha', 'ahem', 'alas', 'all right', 'amen', 'argh', 'as if', 'aw', 'ay', 'aye', 'bah', 'blast', 'boo hoo', 'bother', 'boy', 'brr', 'by golly', 'bye', 'cheerio', 'cheers', 'chin up', 'come on', 'crikey', 'curses', 'dear me', 'doggone', 'drat', 'duh', 'easy does it', 'eek', 'egads', 'er', 'exactly', 'fair enough', 'fiddle-dee-dee', 'fiddlesticks', 'fie', 'foo', 'fooey', 'gadzooks', 'gah', 'gangway', 'g\'day', 'gee', 'gee whiz', 'geez', 'gesundheit', 'get lost', 'get outta here', 'go on', 'good', 'good golly', 'good job', 'gosh', 'gracious', 'great', 'grr', 'gulp', 'ha', 'ha-ha', 'hah', 'hallelujah', 'harrumph', 'haw', 'hee', 'here', 'hey', 'hmm', 'ho hum', 'hoo', 'hooray', 'hot dog', 'how', 'huh', 'hum', 'humbug', 'hurray', 'huzza', 'I say', 'ick', 'is it', 'ixnay', 'jeez', 'just kidding', 'just a sec', 'just wondering', 'kapish', 'la', 'la-di-dah', 'lo', 'look', 'look here', 'long time', 'lordy', 'man', 'meh', 'mmm', 'most certainly', 'my', 'my my', 'my word', 'nah', 'naw', 'never', 'no', 'no can do', 'nooo', 'not', 'no thanks', 'no way', 'nuts', 'oh', 'oho', 'oh-oh', 'oh no', 'okay', 'okey-dokey', 'om', 'oof', 'ooh', 'oopsey', 'over', 'oy', 'oyez', 'peace', 'pff', 'pew', 'phew', 'pish posh', 'psst', 'ptui', 'quite', 'rah', 'rats', 'ready', 'right', 'right on', 'roger', 'roger that', 'rumble', 'say', 'see ya', 'shame', 'shh', 'shoo', 'shucks', 'sigh', 'sleep tight', 'snap', 'sorry', 'sssh', 'sup', 'ta', 'ta-da', 'ta ta', 'take that', 'tally ho', 'tch', 'thanks', 'there', 'there there', 'time out', 'toodles', 'touche', 'tsk', 'tsk-tsk', 'tut', 'tut-tut', 'ugh', 'uh', 'uh-oh', 'um', 'ur', 'urgh', 'very nice', 'very well', 'voila', 'vroom', 'wah', 'well', 'well done', 'well, well', 'what', 'whatever', 'whee', 'when', 'whoa', 'whoo', 'whoopee', 'whoops', 'whoopsey', 'whew', 'why', 'word', 'wow', 'wuzzup', 'ya', 'yea', 'yeah', 'yech', 'yikes', 'yippee', 'yo', 'yoo-hoo', 'you bet', 'you don\'t say', 'you know', 'yow', 'yum', 'yummy', 'zap', 'zounds', 'zowie', 'zzz', 'What manner of thing is this', 'How can that be', 'What am I to do', 'Shine, shine, O bright moon', 'Well, get ready as soon as you can. I will take you back to Holy Russia', 'Let us lie down together to sleep', 'To the blue sea', 'Not you, you stupid goose', 'Get along with you', 'This is not how you dress for your wedding day', 'Who sowed this sort of corn', 'Listen, O Dog', 'The Lord might as well have sent twice as much', 'Well, so be it', 'May the whirlwind carry thee off', 'Here\'s misfortune, sure enough' ];


var words = { adjectives: adjectives, interjections: interjections };

module = module || {};
module.exports = words;
