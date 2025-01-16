<template class="container-fluid" >
    <body style="background-image:url('https://images.unsplash.com/photo-1545569341-9eb8b30979d9?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGt5b3RvfGVufDB8fDB8fHww'); height: 100vh; background-size: cover;">
        <NavBar />
        <div>
            <div class="container mt-4 text-center">

                <div class="row">
                    <div class="col card text-bg-dark mb-3">
                        
                    <h2 class="mt-4 mb-4">Error 404</h2>
                        
                    <p>
                        La página que buscas no existe o pudo haber sido movida a otra ubicación.
                    </p>
                    </div>
                </div>
            </div>
        </div>
    </body>
    
    
</template>
  
<script>
import NavBar from '../components/NavBar.vue';

export default {
  components: {
    NavBar,
  },
};
</script>
  