function totalTravelFare(baseFare, taxPercentage){
	var finalFare;
	finalFare = baseFare*(1+taxPercentage/100);
	return finalFare;
}

function add(a,b) {
    return a+b
}

// jasmine - framework 

// testing instructions
                        /* Below is one time process */
/*
    run the below command in terminal -> ONLY FOR infosys VM run below command
            // path-1
    npm config set registry  https://infyartifactory.ad.infosys.com/artifactory/api/npm/npm/ 
*/

/*
    settin env path process -> 
    windows search and open 'Edit Environ... for your account' -> select 'Path' variable
    -> and add below path(Change username in path) C:\Users\<<YOUR USERNAME>>\AppData\Roaming\npm
    -> click OK -> click OK
    -> Restart vs code
*/ 

/*
    run the below command to install karma and jasmine in a cmd terminal
    npm install -g karma jasmine-core 
*/ 

                    /* Setting up karma. for each project has to be done seperately*/
/* 
    to create a karma.config.js file run the command -> karma init
    and answer the below question as given below
jasmine
Require.js -> no
Browser -> Chrome
files to be covered ->  code.js and then tests/code.test.js and double enter
glob patterns -> just click enter button
watch all files -> yes
            karma.conf.js will be created with all the selections done 
*/

/*
    Start running the test cases -> karma start
*/