



`commands`
## notes




* classes added in layout
    body: class="font-mono" 
    main: class="md:container md:mx-auto w-full min-h-screen"
    

    navision bar:
        header: class="flex justify-between items-center px-4 py-8 font-medium"
		nav: class="flex justify-center items-center gap-x-8 text-2xl"
			a: class="relative"
                <span class="inline-block w-full h-[1px] absolute left-0 -bottom-1 bg-black">&nbsp;</span> <!--here the span added to be the text underline -->

            `a`: href="/about" class="relative group">About
				<span class="inline-block w-0 h-[1px] absolute left-0 -bottom-1 bg-dark group-hover:w-full transition-[width] ease duration-300 ">&nbsp;</span>

# note that when we use [] with class that means an attribute that you want to change is not exist in the framework, therefore you're using [] to add attribute: ex. transition-[width] where width is not exist as predefined in the tailwind css.
		
# using components, you can use one thing many times without writing the code for each one. you can import from one component the basic one to implement more than version in aother one the other one then can be used in your code, to import just theree dashes two times and you write between it the command `import xx from xx ` for example, `--- import NavigationLink from "./NavigationLink.astro"; ---`


# installing Iconify icon library for Astro using `npm i astro-icon` and then importing it into the main layout page using `import { Icon } from 'astro-icon' ` then you can add the icons using ` <Icon name"" widht="" height="">` where you place the icon name into the name attribute from iconfiy website https://iconify.design/ 


# typescript the ? sign in the inteface makes the attribute value that needs to be given as optonal
# class ={`relative ${css} top-0 group-hover:-top-1 transition-[top] ease duration-300`} we add the values of calass between {`class values`} instead of "" because we gonna use an variable by inserting through by the attribut if defined by the initilized component ${}



# Night Mode, and new classes, and Modifers: adding a new class to the tailwind just by 1. setting its name and value to class in the framework json configration for tailwind `darkMode: "class"` and 2. then in the value of `calss="dark" ` in html tag, 3. then in body tag add in dark: modifier which means when that is activated then take specific sttings as following `class="dark:bg-dark dark:text-ligt text-dark bg-light"`

export interface props {
    icon: string;
    title: string;
    url: string;
    target ?: string;
    css?: string; 
}





* added some colors to the tailwind by adjusting the "tailwind.config.cjs" file within this proj
    under theme:{ extend:{added here} } 
    added: 
        colors:	{
				light: "#f5f5f5",
				dark: "#1b1b1b", 
			},