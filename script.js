const outputDiv = document.getElementById('output');
const commandInput = document.getElementById('command');

window.addEventListener('load', function() {
    commandInput.focus();
    const greeting = document.createElement('div');
    greeting.textContent = 'visitor@terminal:~$ Welcome to the terminal';
    outputDiv.appendChild(greeting);
    const greeting2 = document.createElement('pre');
    greeting2.textContent = `
████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗           
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║           
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║           
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║           
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗      
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝      
                                                                       
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ `;
    outputDiv.appendChild(greeting2);
    const greeting3 = document.createElement('div');
    greeting3.textContent = "Type 'help' to get started";
    outputDiv.appendChild(greeting3);
});


commandInput.   addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        commandInput.autofocus = true;
        const command = commandInput.value;
        const commandOutput = document.createElement('div');  // ? for every command u need to create a commandName variable which will create a div and add content to it using textContent property and then append it to the outputDiv
        commandOutput.textContent = `visitor@terminal:~$ ${command}`;
        commandOutput.classList.add('command-output');  

        outputDiv.appendChild(commandOutput);
        commandInput.value = '';
        outputDiv.scrollTop = outputDiv.scrollHeight;
        var commands = 'about, echo, clear, help, banner, socials, projects, email';

        if (!commands.includes(command.split(' ')[0])) {
            commandError = document.createElement('div');
            commandError.textContent = 'command not found';
            outputDiv.appendChild(commandError);
        }

        // about command

        if (command === 'about') {
            commandAbout = document.createElement('pre');
            commandAbout.textContent = `
I am Harshit Raj Mishra, a full stack developer and a competitive programmer.
I am a tech enthusiast and love to code. I am currently pursuing my B.Tech in Computer Science and Engineering from Bits Goa. 
I have a good knowledge of Data Structures and Algorithms and have a good hand in web development. I have worked on various projects and have a good knowledge of various technologies.
I am a quick learner and always ready to learn new things. I am a team player and have good communication skills. I am always ready to take up new challenges and work on them. 
I am a hardworking and dedicated person and always ready to work on new projects
type 'socials' to connect with me`;
            outputDiv.appendChild(commandAbout);
        }

        // echo command

        if (command.includes('echo')) {
            commandEcho = document.createElement('div');
            commandEcho.textContent = command.slice(5, command.length);
            outputDiv.appendChild(commandEcho);
        }

        // clear command
        if (command === 'clear'){
            outputDiv.innerHTML = '';
        }
        
        // help command
        if(command === 'help'){
            commandHelp = document.createElement('pre');
            commandHelp.textContent = 
            `
about           - about Author
echo            - print 
education       - Author's education background (Not implemented yet)
email           - send an email to author
help            - all commands
projects        - view projects that I've coded (Not implemented yet)
socials         - connect with me on socials
banner          - display welcome section
clear           - clear the terminal
            `;


            outputDiv.appendChild(commandHelp);
        }

        // banner command
        if(command === 'banner'){
            commandBanner = document.createElement('Pre');
            commandBanner.textContent = `

Welcome to the terminal!

████████╗███████╗██████╗ ███╗   ███╗██╗███╗   ██╗ █████╗ ██╗           
╚══██╔══╝██╔════╝██╔══██╗████╗ ████║██║████╗  ██║██╔══██╗██║           
   ██║   █████╗  ██████╔╝██╔████╔██║██║██╔██╗ ██║███████║██║           
   ██║   ██╔══╝  ██╔══██╗██║╚██╔╝██║██║██║╚██╗██║██╔══██║██║           
   ██║   ███████╗██║  ██║██║ ╚═╝ ██║██║██║ ╚████║██║  ██║███████╗      
   ╚═╝   ╚══════╝╚═╝  ╚═╝╚═╝     ╚═╝╚═╝╚═╝  ╚═══╝╚═╝  ╚═╝╚══════╝      
                                                                       
██████╗  ██████╗ ██████╗ ████████╗███████╗ ██████╗ ██╗     ██╗ ██████╗ 
██╔══██╗██╔═══██╗██╔══██╗╚══██╔══╝██╔════╝██╔═══██╗██║     ██║██╔═══██╗
██████╔╝██║   ██║██████╔╝   ██║   █████╗  ██║   ██║██║     ██║██║   ██║
██╔═══╝ ██║   ██║██╔══██╗   ██║   ██╔══╝  ██║   ██║██║     ██║██║   ██║
██║     ╚██████╔╝██║  ██║   ██║   ██║     ╚██████╔╝███████╗██║╚██████╔╝
╚═╝      ╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚═╝      ╚═════╝ ╚══════╝╚═╝ ╚═════╝ 

type 'help' to get started
`;
            outputDiv.appendChild(commandBanner);
        }

        // socials command

        if(command === 'socials'){
            commandSocials = document.createElement('pre');
            commandSocials.textContent = `
Social Platform:
> Github       
> Twitter
> Instagram
> Linkedin
type 'socials <platform>' to open link directly
            `;
            outputDiv.appendChild(commandSocials);
        }

        if(command === 'socials github'){
            window.location.href = 'https://github.com/GhostGamr';
        }
        if(command === 'socials twitter'){
            window.location.href = 'https://x.com/_thisishrm';
        }
        if(command === 'socials instagram'){
            window.location.href = 'https://www.instagram.com/_thisishrm/';
        }
        if(command === 'socials linkedin'){
            window.location.href = 'https://www.linkedin.com/in/harshit-raj-mishra-08b18826b/';
        }
    
        // email command

        if(command === 'email'){
            window.location.href = 'mailto:harshitrajmishras@gmail.com';
        }

        // projects command

        if(command === 'projects'){
            commandProjects = document.createElement('pre');
            commandProjects.textContent = 'Projects are on their way...';
            outputDiv.appendChild(commandProjects);
        }
    }

});