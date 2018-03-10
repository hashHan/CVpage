<template>
    <ul class="nav flex-column">
        <router-link to="/" tag="li" active-class="active" exact><a>Home</a></router-link>
        <router-link to="/portfolio" tag="li" active-class=""><a>Portfolio</a></router-link>
        <router-link to="/work" tag="li" active-class=""><a>Work</a></router-link>
        <router-link to="/education" tag="li" active-class=""><a>Education</a></router-link>
        <router-link to="/skills" tag="li" active-class=""><a>Skills</a></router-link>
        <router-link to="/otherinfo" tag="li" active-class=""><a>Otherinfo</a></router-link>
    </ul>
</template>