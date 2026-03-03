<template>
  <main
    class="bg-[var(--background)] selection:bg-[var(--primary)] selection:text-white"
  >
    <section
      class="relative min-h-[90vh] flex items-center justify-center bg-[var(--background)] overflow-hidden pt-20"
    >
      <div class="absolute inset-0 z-0 select-none pointer-events-none">
        <div
          class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center"
        >
          <h2
            class="text-[20vw] font-black leading-none uppercase italic opacity-[0.03] dark:opacity-[0.05] tracking-tighter text-[var(--text-main)]"
          >
            BODYMAC S
          </h2>
        </div>

        <div
          class="absolute inset-0 opacity-[0.02] dark:opacity-[0.07]"
          style="
            background-image: radial-gradient(
              var(--accent) 0.5px,
              transparent 0.5px
            );
            background-size: 40px 40px;
          "
        ></div>

        <div
          class="absolute top-1/4 -right-20 w-[500px] h-[500px] bg-[var(--primary)]/10 rounded-full blur-[120px] animate-pulse"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative z-10 text-center">
        <div class="space-y-10">
          <div
            class="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-[var(--primary)]/20 bg-[var(--primary)]/5 backdrop-blur-sm animate-fade-in"
          >
            <span class="relative flex h-2 w-2">
              <span
                class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"
              ></span>
              <span
                class="relative inline-flex rounded-full h-2 w-2 bg-[var(--primary)]"
              ></span>
            </span>
            <span
              class="text-[10px] font-black uppercase tracking-[0.5em] text-[var(--primary)]"
              >Architecture First Strategy</span
            >
          </div>

          <h1
            class="text-6xl md:text-9xl font-black tracking-tighter leading-[0.85] uppercase italic text-[var(--text-main)]"
          >
            L'INGÉNIERIE<br />
            <span
              class="text-transparent"
              style="-webkit-text-stroke: 1.5px var(--primary)"
              >SANS LIMITES.</span
            >
          </h1>

          <div class="max-w-2xl mx-auto space-y-6">
            <p
              class="text-lg md:text-xl text-[var(--text-muted)] leading-relaxed font-light"
            >
              Nous ne nous contentons pas de coder. Nous bâtissons des systèmes
              <span class="text-[var(--primary)] font-bold">robustes</span>,
              <span class="text-[var(--primary)] font-bold">scalables</span> et
              orientés performance.
            </p>

            <div
              class="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6"
            >
              <button
                class="group relative px-10 py-5 bg-[var(--primary)] text-white font-black uppercase text-xs tracking-[0.3em] overflow-hidden transition-all hover:bg-[var(--primary-hover)]"
              >
                <span class="relative z-10">Démarrer un projet</span>
                <div
                  class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"
                ></div>
              </button>

              <RouterLink
                to="/realisations"
                class="px-10 py-5 border-2 border-[var(--text-main)] text-[var(--text-main)] font-black uppercase text-xs tracking-[0.3em] hover:bg-[var(--text-main)] hover:text-[var(--background)] transition-all"
              >
                Nos Réalisations
              </RouterLink>
            </div>
          </div>
        </div>
      </div>

      <div class="absolute bottom-10 left-10 hidden lg:block">
        <div class="flex flex-col gap-2">
          <div
            class="w-1 h-12 bg-gradient-to-b from-[var(--primary)] to-transparent"
          ></div>
          <span
            class="text-[10px] font-mono text-[var(--text-muted)] rotate-180 [writing-mode:vertical-lr]"
            >SCROLL_FOR_INTENT</span
          >
        </div>
      </div>
    </section>

    <section class="py-24 relative">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div class="lg:col-span-4 space-y-6">
            <div class="mb-10">
              <h2
                class="text-xs font-black text-[var(--primary)] uppercase tracking-[0.5em] mb-2"
              >
                // DIRECT ACCESS
              </h2>
              <p
                class="text-secondary-600 dark:text-secondary-400 text-sm italic"
              >
                Besoin d'une réponse immédiate ?
              </p>
            </div>

            <a
              href="tel:640472357"
              class="group block p-6 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-500 rounded-sm"
            >
              <div class="flex items-center gap-6">
                <div
                  class="text-3xl grayscale group-hover:grayscale-0 transition-all"
                >
                  ☎️
                </div>
                <div>
                  <p
                    class="text-[10px] font-bold text-secondary-500 uppercase tracking-widest mb-1"
                  >
                    Téléphone
                  </p>
                  <p
                    class="font-black text-lg group-hover:text-[var(--primary)] transition-colors tracking-tight"
                  >
                    640 472 357 / 696 428 651
                  </p>
                </div>
              </div>
            </a>

            <a
              href="mailto:bodymacs@gmail.com"
              class="group block p-6 bg-[var(--surface)] border border-[var(--border)] hover:border-[var(--primary)] transition-all duration-500 rounded-sm"
            >
              <div class="flex items-center gap-6">
                <div
                  class="text-3xl grayscale group-hover:grayscale-0 transition-all"
                >
                  📧
                </div>
                <div>
                  <p
                    class="text-[10px] font-bold text-secondary-500 uppercase tracking-widest mb-1"
                  >
                    Email (Expertise 24h)
                  </p>
                  <p
                    class="font-black text-lg group-hover:text-[var(--primary)] transition-colors tracking-tight"
                  >
                    bodymacs@gmail.com
                  </p>
                </div>
              </div>
            </a>

            <div
              class="p-8 border-l-2 border-[var(--border)] hover:border-[var(--primary)] bg-secondary-50 dark:bg-white/5 transition-all"
            >
              <h3
                class="font-black uppercase tracking-tighter text-xl mb-4 italic"
              >
                📍 Localisation
              </h3>
              <p class="text-sm text-secondary-500 leading-relaxed mb-6">
                Bafoussam, Ouest Region<br />
                Cameroon, Africa
              </p>
              <button
                class="text-[10px] font-black uppercase tracking-widest text-[var(--primary)] hover:underline"
              >
                → Itinéraire
              </button>
            </div>
          </div>

          <!-- <div
            class="lg:col-span-8 p-1 md:p-12 bg-white dark:bg-white/5 border border-[var(--border)] shadow-2xl relative overflow-hidden group"
          > -->

          <div
            class="lg:col-span-8 p-1 md:p-12 bg-white dark:bg-white/5 border border-[var(--border)] shadow-2xl relative group"
          >
            <div
              class="absolute -top-20 -right-20 w-64 h-64 bg-[var(--primary)]/5 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"
            ></div>

            <div class="relative z-10">
              <div class="mb-12">
                <h2
                  class="text-4xl font-black tracking-tighter uppercase italic mb-4"
                >
                  Briefez-nous.
                </h2>
                <div
                  class="w-20 h-1 bg-[var(--primary)] mb-6 shadow-[0_0_10px_var(--primary)]"
                ></div>
              </div>

              <form
                @submit.prevent="submitForm"
                class="space-y-8 md:space-y-10 px-4 md:px-0 max-w-3xl mx-auto"
              >
                <!-- Message de succès -->
                <div
                  v-if="showSuccess"
                  class="fixed top-10 left-1/2 -translate-x-1/2 px-6 py-3 rounded-md bg-[var(--primary)] text-white font-semibold shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up z-50"
                >
                  {{ successMessage }}
                </div>

                <!-- Message d'erreur -->
                <div
                  v-if="errorMessage"
                  class="fixed top-10 left-1/2 -translate-x-1/2 px-6 py-3 rounded-md bg-red-600 text-white font-semibold shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up z-50"
                >
                  {{ errorMessage }}
                </div>

                <!-- Row 1: Name + Email -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <div class="group space-y-1">
                    <label
                      class="block text-sm md:text-base font-semibold text-[var(--primary)]"
                    >
                      Nom Complet *
                    </label>
                    <input
                      v-model="form.name"
                      type="text"
                      placeholder="Aubin Simo"
                      required
                      class="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 md:py-4 text-lg md:text-xl placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[var(--primary)] outline-none transition-colors duration-300"
                    />
                  </div>

                  <div class="group space-y-1">
                    <label
                      class="block text-sm md:text-base font-semibold text-[var(--primary)]"
                    >
                      Email Professionnel *
                    </label>
                    <input
                      v-model="form.email"
                      type="email"
                      placeholder="contact@projet.com"
                      required
                      class="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 md:py-4 text-lg md:text-xl placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[var(--primary)] outline-none transition-colors duration-300"
                    />
                  </div>
                </div>

                <!-- Row 2: Type de Projet + Budget -->
                <div class="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                  <div class="group space-y-1 relative">
                    <label
                      class="block text-sm md:text-base font-semibold text-gray-500 group-focus-within:text-[var(--primary)]"
                    >
                      Type de Projet
                    </label>
                    <select
                      v-model="form.projectType"
                      required
                      class="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 md:py-4 text-lg md:text-xl appearance-none cursor-pointer focus:border-[var(--primary)] outline-none transition-colors duration-300"
                    >
                      <option value="" disabled>Sélectionnez un type</option>
                      <option value="web">Application Web (SaaS)</option>
                      <option value="mobile">Mobile (iOS / Android)</option>
                      <option value="cloud">Cloud & DevOps</option>
                    </select>
                    <div
                      class="absolute right-0 bottom-3 pointer-events-none text-gray-400 dark:text-gray-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>

                  <div class="group space-y-1 relative">
                    <label
                      class="block text-sm md:text-base font-semibold text-gray-500 group-focus-within:text-[var(--primary)]"
                    >
                      Budget Estimé
                    </label>
                    <select
                      v-model="form.budget"
                      class="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 md:py-4 text-lg md:text-xl appearance-none cursor-pointer focus:border-[var(--primary)] outline-none transition-colors duration-300"
                    >
                      <option value="">Non défini</option>
                      <option value="5k-15k">5k - 15k €</option>
                      <option value="15k-50k">15k - 50k €</option>
                      <option value="50k+">50k+ €</option>
                    </select>
                    <div
                      class="absolute right-0 bottom-3 pointer-events-none text-gray-400 dark:text-gray-500"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="m6 9 6 6 6-6" />
                      </svg>
                    </div>
                  </div>
                </div>

                <!-- Row 3: Message -->
                <div class="group space-y-1">
                  <label
                    class="block text-sm md:text-base font-semibold text-gray-500 group-focus-within:text-[var(--primary)]"
                  >
                    Détails du projet *
                  </label>
                  <textarea
                    v-model="form.message"
                    rows="5"
                    required
                    placeholder="Parlez-nous de vos objectifs et de vos contraintes..."
                    class="w-full bg-transparent border-b border-gray-300 dark:border-gray-600 py-3 md:py-4 text-lg md:text-xl resize-none placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:border-[var(--primary)] outline-none transition-colors duration-300"
                  ></textarea>
                </div>

                <!-- Row 4: Checkbox -->
                <div class="flex items-start gap-3">
                  <input
                    id="agree"
                    v-model="form.agree"
                    type="checkbox"
                    required
                    class="accent-[var(--primary)] w-5 h-5 cursor-pointer rounded border-gray-400 dark:border-gray-600"
                  />
                  <label
                    for="agree"
                    class="text-sm md:text-base text-gray-500 dark:text-gray-400 leading-relaxed cursor-pointer"
                  >
                    J'accepte que l'ingénierie de
                    <strong>BodyMacs</strong> traite mes données pour me
                    recontacter dans le cadre de ma demande.
                  </label>
                </div>

                <!-- Submit Button -->
                <button
                  type="submit"
                  class="w-full py-2 bg-[var(--primary)] text-white font-semibold text-lg uppercase tracking-wide rounded-md shadow-lg transition-all duration-300 transform hover:-translate-y-1 active:scale-95"
                >
                  Transmettre le Brief
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="py-2 text-white relative overflow-hidden">
      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="grid grid-cols-3 gap-20 text-center">
          <div v-for="(stat, idx) in stats" :key="idx" class="space-y-3">
            <div class="text-4xl font-semibold text-[var(--primary)]">
              {{ stat.number }}
            </div>

            <p class="text-sm text-white/50 tracking-wide">
              {{ stat.label }}
            </p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import { ref } from "vue";
import emailjs from "emailjs-com";
const loading = ref(false); // <-- Ajoute ça
const form = ref({
  name: "",
  email: "",
  company: "",
  phone: "",
  projectType: "",
  budget: "",
  timeline: "",
  message: "",
  agree: false,
});

const showSuccess = ref(false);
const successMessage = ref("");
const errorMessage = ref("");

const stats = [
  { number: "24h", label: "Temps de réponse max" },
  { number: "50+", label: "Projets réussis" },
  { number: "95%", label: "Satisfaction client" },
];

// const submitForm = async () => {
//   sendEmail();
//   showSuccess.value = true;
//   setTimeout(() => {
//     form.value = {
//       name: "",
//       email: "",
//       company: "",
//       phone: "",
//       projectType: "",
//       budget: "",
//       timeline: "",
//       message: "",
//       agree: false,
//     };
//     showSuccess.value = false;
//   }, 3000);
// };

const submitForm = async () => {
  if (loading.value) return;
  loading.value = true;

  try {
    await sendEmail();

    successMessage.value = "Votre message a été envoyé avec succès.";
    showSuccess.value = true;

    setTimeout(() => {
      showSuccess.value = false;
    }, 3000);

    // Reset formulaire
    form.value = {
      name: "",
      email: "",
      company: "",
      phone: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
      agree: false,
    };
  } catch (err) {
    errorMessage.value = "Une erreur est survenue. Veuillez réessayer.";
    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);
  } finally {
    loading.value = false;
  }
};

const sendEmail = () => {
  // Format date/heure d'envoi
  const now = new Date();
  const time = now.toLocaleString("fr-FR", {
    dateStyle: "full",
    timeStyle: "short",
  });
  emailjs
    .send(
      "service_4dm2t9a", // Service ID
      "template_ch05lag", // Template ID
      {
        from_name: form.value.name,
        from_email: form.value.email,
        company: form.value.company,
        phone: form.value.phone,
        projectType: form.value.projectType,
        budget: form.value.budget,
        timeline: form.value.timeline,
        message: form.value.message,
        time: time,
      },
      "JB6T0Rx2FNlGbn1mL", // Public Key
    )
    .then(
      (result) => {
        // Succès : afficher un message ou vider le formulaire
        successMessage.value = "Votre message a été envoyé avec succès.";
      },
      (error) => {
        // Erreur : afficher un message d'erreur
        errorMessage.value = "Une erreur est survenue. Veuillez réessayer.";
      },
    );
};
</script>
<style scoped>
.animate-fade-in {
  animation: fadeIn 1s ease-out;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Effet de lueur sur le texte au survol de la section */
section:hover h1 span {
  text-shadow: 0 0 30px rgba(243, 146, 0, 0.2);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
  to {
    opacity: 1;
    transform: translate(-50%, 0);
  }
}

.animate-fade-in-up {
  animation: fadeInUp 0.5s ease-out forwards;
}
</style>
