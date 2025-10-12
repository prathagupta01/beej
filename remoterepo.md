#                   	    Git \& GitHub $~



jab bhi koii directory ke liye vs code use kar rahi hai to make sure ki yeh jo terminal hai uspai git bash activated ho naa ki comand prompt cmmands work nhi karenge nhi to kuch kuch



--> git configuration



     git config --global user.name "my name"

     git config --global user.email "email@gmail.com"

     git config --list



 	There are two types of configurations in git

 		\* global - this sets the configuration globally

 		\* local - if you want to access or make changes a particular repo/project or a file using a specified email you can change it locally only for that repo

* ## *git basis*



  *git is a version control system. used to track*

  

  *~ this shows that we are in the root directory (aur is hi folder mai bethkar ham hamre git ko configure karenge )*

  

  *credential.helper=manager*

  &nbsp;	\*this credential helper which stores the credential of the user like name, id, email etc.\*


  

  

* ## *git command*

  

  ##### 

1. ##### *clone \& status*

   

   ---

    	there are two references remote and local

                          remote --> GitHub
   local --> laptop, pc (this system or the project file on this)

   ---

   

   ###### ||  CLONE - cloning(copy) a repository on our local machine

    

                     git clone <--link of the repo that you want to copy from the remote system(like github)-->

   

        \\\\ cd - change directory (used for changing path of the terminal where we want to ammend )

                                  cd "directory path"

                                  dir "list of the files in the directory"

                                  ls shows list of file (unhidden)

                                  ls -a  shows all the files in the files present hidden and non hidden

                                  ls -h only shows unhidden files

                 *if there does not exists a file as .git while chehcking the dir then.you can initialize it 														by using \[git init]*

   &nbsp;       \*{jitni bhi files ko git track kar rha hai usme .git nam ka folder hamesha hota hai}\*






   

   

   

   

   ###### || STATUS - displays the state of the code

    

                      git status

   

   \*\*status types\*\*
   

    		\* untracked - new files that git doesn't yet track

    		\* modified - changed

    		\* staged - file is ready to be comitted

    		\* unstaged - unchanged

   

    	change | new file

    	(modifed)    (untracked)

          	     Add (staged)

             commit (unchanged)

   

        jab bhi ham koii chang yah new file bana hai to usse hame add karna padhta hai and this ADD commes in the "staged" status

    	and then if we commit it the status becmoes unchanged

   

   ##### 

   ##### *2. Add \& Commit*

   ###### 

   ###### || ADD - adds new or changed files in your working directory to the git staging area.

    

                             git add <--file name-->

    

       if want to add all changes and new file do 	    ------>	**git add .**

   

   ###### || COMMIT - it is the record of changes

    

    	commit ka record hota hai add ka koii recod nhi hota hai

   

                            git commit -m "some message"

   

    yeh message apne liye hota hai thoda meaning ful hona chahiye as this will help in understanding the changes made

   

    	 {} AFTER COMMITING THE CHANGES IT WILL STILL NOT VISIBLE ON THE REMOTE DIRECTORY GITHUB, ETC. FOR THIS WE HAVE TO PUSH THE COMMAND

    

    	             MESSAGE AFTER COMITING  ---      Your branch is ahead of 'origin/main' by 1 commit.

                                                          (use "git push" to publish your local commits)

   

   ##### *3. Push command*

   

   \*push - upload local repo content to remote repo\* 



                                  \*git push origin main\*


   

   

    	git push is the basic command used for pushing the comits

    	origin - this sets the changes to the remote repo and is a default name

    	main - here this shows the branch of the repo

   

   ##### *4. init command*

   

   *naya project ho to yah existing project mai agar git ka repo bana ke (initialize karne ke )liye use hota hai ".git"*

   \*init - used to create a new git repo\*

   			

   				\*git init\* 

   			       \*git remote add origin <--link-->(want to add new git repo)\*

   			       \*git remote -v (to verify remote)\*

     				\*git branch (to check branch)\*

        				\*git branch -M main (to rename branch)\*

   				\*git push origin main\*

                                              \*also git push -u origin main (-u set upstream i.e. it will defaut the origin main for all and\* 

                                                                              \*we dont need to write orgin main AgAAg if working in the same directory for long)\*




   

   

   

   *------------------------------------------------------------------------*

   &nbsp;    cd .. use to return to the parant directory 
   

        mkdir this is use to make new directory (folder banane ke liye)

   **------------------------------------------------------------------------**

   

   #### **WORKFLOW**

   #### **local git**

   #### github repo --> clone --> changes --> add --> commit

   

   

   ## 

* ## Git Branches
* for a repo we can create different branches this branches are for the teams this shares the copy of the main code to the various branches and lets modify the code
* after the changes comitted to the specific different branches we can merge them to the main stream code
* here merging means ki dono branches ke code ko same kar diya hai 

  

  #### 

1. #### branch commands

    

           git branch  (to check branch)

           git branch -M main (to rename branch)

           git checkout <-branch name-> (to navigate)

           git checkout -b <-new branch name-> (to create new branch)

           git branch -d <-branch name-> (to delete branch)

   

   jab bhi koii branch delete kare to hame kiss aur branch paitab hona chahiye x branch ko x branch pai khade ho ke delete nhi kar sakhte

   

   

#### 2\. Merging code 

&nbsp;

###### &nbsp;	WAY 01

&nbsp;			git diff <-branch name-> (to compare commits,branches,files \& more)

&nbsp;			git merge<-branch name-> (to merge 2 branches)

	*isme branch nai jis branch mai merge karna hai uska name hai aur jisko karna hai uspai khade hai at this moment* 

*git merge wale command mai jis branch pai khade hai uske alawa jo branch hai uska name likho x pai ho to main* 

	*next time jab terminal mai main se merge karnege to tab koii conflict nhi aayega kyuki same line mai changes honge tab* 

		*kyuki merging ke time tab wo resolve kar diya tha conflict.*



		***JAB RETRUN KARNA HO PAGE SE DIFF SE TO  Q***



###### &nbsp;	WAY 02 

&nbsp;			create a PR (pull request)





* ##### **PULL REQUEST** 
* 
**&nbsp;			  it lets you tell others about changes you're pushed to a branch in a repository on github.**



					**BRANCH --> MAIN (SENIOR DEVELOPER)**

						 **PR review**





* #### **pull command** 
* 
**&nbsp;** 

				**git pull origin main**

	

	**used to fetch and download content from a remote repo and immediately update the local repo to match that content.**



**jo pull request se branches merge ki to github pai to uska content update ho gaya par apne system pai to hua hi nhi to apne system par update karne ke liye pull command** 









#### **Resolving MERGE CONFLICTS**



						**An event that takes place when Git is unable to automatically resolve differences in code between two commits.**

						**terminal par options aate hai select kar lo bas fir status dekh ke confirm kar lo konflicts ko ki merging hui yah nhi** 



* ### &nbsp;Undoing Changes

&nbsp;

##### &nbsp;	CASE 01: staged changes 

&nbsp;                                   yeh wo changes hai jinko add kiya hai par abhi tak commit nhi kiya hai



&nbsp; 							git reset<-file name-> (ek file ke liye)

&nbsp;							git reset (sab ke liye)



##### &nbsp;	CASE 02: commited changes (for one commit)

&nbsp;                                                           



&nbsp;						    				    git reset HEAD~1

##### 

##### &nbsp;	CASE 03: commited changes (for many commits)



&nbsp;                                             hash is the id given to the comitted change 

&nbsp;                                        we can list this id by **git log** command

&nbsp;											

&nbsp;											git reset<-commit hash->

&nbsp;											git reset --hard <-commit hash-> (isse github aur vs dono se sare changes hat jayenge)

### FORK

&nbsp;	    A fork is a new repository that shares code and visibility settings with the original "upstream" repository.(FORK is a rough copy)





-------------------------------------------------------------------------------------END--------\_\_\_\_\_\_\_---------------------------------\_--\_\_\_\_\_\_----------------------------------------------

							

