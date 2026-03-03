<template>
  <main>
    <!-- Header Section -->
    <section
      class="relative bg-secondary-900 dark:bg-secondary-950 text-white py-12 md:py-16 overflow-hidden"
    >
      <!-- Animated background elements -->
      <div class="absolute inset-0 overflow-hidden">
        <div
          class="absolute top-0 right-0 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-float"
        ></div>
        <div
          class="absolute bottom-0 left-1/3 w-96 h-96 bg-secondary-500/10 rounded-full blur-3xl animate-float"
          style="animation-delay: 1s"
        ></div>
      </div>

      <div class="max-w-7xl mx-auto px-4 relative z-10">
        <div class="space-y-6 animate-fade-in-up">
          <div
            class="inline-flex items-center gap-3 px-4 py-2 bg-primary-500/20 dark:bg-primary-500/30 rounded-full w-fit border border-primary-500/30"
          >
            <span
              class="w-2 h-2 bg-primary-500 rounded-full animate-pulse"
            ></span>
            <span class="text-sm font-semibold text-primary-300"
              >Parlez Avec Nous</span
            >
          </div>
          <h1
            class="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black leading-tight"
          >
            Parlons de Votre Projet
          </h1>
          <p class="text-lg text-secondary-200 max-w-2xl leading-relaxed">
            Consultation gratuite. Aucun engagement. Juste une conversation pour
            explorer comment on peut vous aider.
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Section -->
    <section class="py-20 bg-white dark:bg-secondary-900">
      <div class="max-w-7xl mx-auto px-4">
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-16">
          <!-- Contact Info Sidebar -->
          <div class="lg:col-span-1 animate-slide-in-left">
            <div class="sticky top-20 space-y-8">
              <!-- Quick Contact -->
              <div
                class="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700"
              >
                <h3
                  class="font-black text-lg text-secondary-900 dark:text-white mb-4"
                >
                  Contact Rapide
                </h3>
                <div class="space-y-4">
                  <a
                    href="tel:640472357"
                    class="flex gap-3 items-center hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
                  >
                    <div
                      class="w-10 h-10 bg-primary-500/10 dark:bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all"
                    >
                      ☎️
                    </div>
                    <div>
                      <p
                        class="text-xs text-secondary-600 dark:text-secondary-400"
                      >
                        Téléphone
                      </p>
                      <p class="font-bold text-secondary-900 dark:text-white">
                        640472357 / 696428651
                      </p>
                    </div>
                  </a>
                  <a
                    href="mailto:bodymaclabs@gmail.com"
                    class="flex gap-3 items-center hover:text-primary-600 dark:hover:text-primary-400 transition-colors group"
                  >
                    <div
                      class="w-10 h-10 bg-primary-500/10 dark:bg-primary-500/20 rounded-lg flex items-center justify-center group-hover:bg-primary-500 group-hover:text-white transition-all"
                    >
                      📧
                    </div>
                    <div>
                      <p
                        class="text-xs text-secondary-600 dark:text-secondary-400"
                      >
                        Email (24h)
                      </p>
                      <p class="font-bold text-secondary-900 dark:text-white">
                        bodymaclabs@gmail.com
                      </p>
                    </div>
                  </a>
                </div>
              </div>

              <!-- Response Time -->
              <div
                class="bg-primary-500/10 dark:bg-primary-500/20 border border-primary-500/30 rounded-xl p-6"
              >
                <h3
                  class="font-bold text-primary-700 dark:text-primary-400 mb-2"
                >
                  ⚡ Temps de Réponse
                </h3>
                <p class="text-secondary-700 dark:text-secondary-300 text-sm">
                  Nous répondons à tous les messages dans les 24h ouvrables.
                  Pour urgent, appelez directement.
                </p>
              </div>

              <!-- Office Hours -->
              <div
                class="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700"
              >
                <h3 class="font-bold text-secondary-900 dark:text-white mb-4">
                  🕐 Horaires
                </h3>
                <div
                  class="space-y-2 text-sm text-secondary-600 dark:text-secondary-400"
                >
                  <p><span class="font-semibold">Lun - Ven:</span> 9h - 18h</p>
                  <p><span class="font-semibold">Samedi:</span> 10h - 14h</p>
                  <p><span class="font-semibold">Dimanche:</span> Fermé</p>
                </div>
              </div>

              <!-- Office Location -->
              <div
                class="bg-secondary-50 dark:bg-secondary-800 rounded-xl p-6 border border-secondary-200 dark:border-secondary-700"
              >
                <h3 class="font-bold text-secondary-900 dark:text-white mb-4">
                  📍 Paris
                </h3>
                <p
                  class="text-sm text-secondary-600 dark:text-secondary-400 leading-relaxed mb-4"
                >
                  123 Avenue de l'Innovation<br />
                  75001 Paris, France
                </p>
                <button
                  class="text-primary-600 dark:text-primary-400 font-semibold hover:text-primary-700 dark:hover:text-primary-300"
                >
                  → Voir sur Google Maps
                </button>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="lg:col-span-2 animate-slide-in-right">
            <!-- Form Header -->
            <div class="mb-12">
              <h2
                class="text-3xl font-black text-secondary-900 dark:text-white mb-3"
              >
                Laissez-Nous un Message
              </h2>
              <p class="text-secondary-600 dark:text-secondary-400">
                Remplissez ce formulaire et nous vous recontacterons très
                bientôt pour discuter de vos besoins.
              </p>
            </div>

            <!-- Form -->
            <form @submit.prevent="submitForm" class="space-y-6">
              <!-- Name & Email -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    for="name"
                    class="block text-sm font-bold text-secondary-900 dark:text-white mb-2"
                  >
                    Nom Complet <span class="text-primary-500">*</span>
                  </label>
                  <input
                    id="name"
                    v-model="form.name"
                    type="text"
                    required
                    class="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all"
                    placeholder="Jean Dupont"
                  />
                </div>
                <div>
                  <label
                    for="email"
                    class="block text-sm font-bold text-secondary-900 dark:text-white mb-2"
                  >
                    Email <span class="text-primary-500">*</span>
                  </label>
                  <input
                    id="email"
                    v-model="form.email"
                    type="email"
                    required
                    class="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all"
                    placeholder="jean@company.com"
                  />
                </div>
              </div>

              <!-- Company & Phone -->
              <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    for="company"
                    class="block text-sm font-bold text-secondary-900 dark:text-white mb-2"
                  >
                    Entreprise
                  </label>
                  <input
                    id="company"
                    v-model="form.company"
                    type="text"
                    class="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all"
                    placeholder="Your Company"
                  />
                </div>
                <div>
                  <label
                    for="phone"
                    class="block text-sm font-bold text-secondary-900 dark:text-white mb-2"
                  >
                    Téléphone
                  </label>
                  <input
                    id="phone"
                    v-model="form.phone"
                    type="tel"
                    class="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all"
                    placeholder="+33 6 12 34 56 78"
                  />
                </div>
              </div>

              <!-- Project Type -->
              <div>
                <label
                  for="projectType"
                  class="block text-sm font-bold text-secondary-900 dark:text-white mb-2"
                >
                  Type de Projet <span class="text-primary-500">*</span>
                </label>
                <select
                  id="projectType"
                  v-model="form.projectType"
                  required
                  class="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all"
                >
                  <option value="">Choisir un type</option>
                  <option value="web">Application Web</option>
                  <option value="mobile">Application Mobile</option>
                  <option value="cloud">Infrastructure Cloud</option>
                  <option value="backend">Backend & API</option>
                  <option value="consulting">Consulting Technique</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <!-- Budget -->
              <div>
                <label
                  for="budget"
                  class="block text-sm font-bold text-secondary-900 dark:text-white mb-2"
                >
                  Budget Estimé
                </label>
                <select
                  id="budget"
                  v-model="form.budget"
                  class="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all"
                >
                  <option value="">Non défini</option>
                  <option value="5k-15k">5k - 15k €</option>
                  <option value="15k-50k">15k - 50k €</option>
                  <option value="50k-100k">50k - 100k €</option>
                  <option value="100k+">100k+ €</option>
                </select>
              </div>

              <!-- Timeline -->
              <div>
                <label
                  for="timeline"
                  class="block text-sm font-bold text-secondary-900 dark:text-white mb-2"
                >
                  Timeline
                </label>
                <select
                  id="timeline"
                  v-model="form.timeline"
                  class="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all"
                >
                  <option value="">Quand avez-vous besoin de démarrer?</option>
                  <option value="immediately">Immédiatement</option>
                  <option value="1month">Dans 1 mois</option>
                  <option value="3months">Dans 3 mois</option>
                  <option value="6months">Dans 6 mois</option>
                  <option value="flexible">Flexible</option>
                </select>
              </div>

              <!-- Message -->
              <div>
                <label
                  for="message"
                  class="block text-sm font-bold text-secondary-900 dark:text-white mb-2"
                >
                  Décrivez Votre Projet <span class="text-primary-500">*</span>
                </label>
                <textarea
                  id="message"
                  v-model="form.message"
                  required
                  rows="6"
                  class="w-full px-4 py-3 border border-secondary-300 dark:border-secondary-700 rounded-lg bg-white dark:bg-secondary-800 text-secondary-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary-500 dark:focus:ring-primary-400 transition-all resize-none"
                  placeholder="Décrivez votre projet, vos objectifs, et ce que vous recherchez..."
                ></textarea>
              </div>

              <!-- Checkbox -->
              <div class="flex gap-3 items-start">
                <input
                  id="agree"
                  v-model="form.agree"
                  type="checkbox"
                  required
                  class="w-5 h-5 rounded border-secondary-300 dark:border-secondary-700 text-primary-500 focus:ring-2 focus:ring-primary-500 mt-1"
                />
                <label
                  for="agree"
                  class="text-sm text-secondary-600 dark:text-secondary-400"
                >
                  J'accepte que BodyMac Labs me recontacte à propos de mon
                  projet.
                </label>
              </div>

              <!-- Success Message -->
              <div
                v-if="showSuccess"
                class="p-4 bg-green-500/10 border border-green-500/30 rounded-lg"
              >
                <p class="text-green-700 dark:text-green-400 font-semibold">
                  ✓ Merci! Nous vous recontacterons très bientôt.
                </p>
              </div>

              <!-- Submit Button -->
              <button
                type="submit"
                class="w-full px-8 py-4 bg-primary-500 hover:bg-primary-600 text-white font-bold rounded-lg transition-all hover-lift"
              >
                Envoyer le Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Social Proof -->
    <section class="py-20 bg-secondary-50 dark:bg-secondary-800">
      <div class="max-w-7xl mx-auto px-4">
        <div class="text-center mb-12 animate-fade-in-up">
          <h2
            class="text-3xl font-black text-secondary-900 dark:text-white mb-2"
          >
            Rejoignez Nos Clients Satisfaits
          </h2>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            v-for="(stat, idx) in stats"
            :key="idx"
            class="text-center animate-fade-in-up"
            :style="{ animationDelay: `${idx * 100}ms` }"
          >
            <div class="text-5xl font-black text-primary-500 mb-2">
              {{ stat.number }}
            </div>
            <p class="text-secondary-600 dark:text-secondary-400 font-semibold">
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

const submitForm = async () => {
  // Préparation EmailJS (à compléter avec tes identifiants)
  // await window.emailjs.send('service_id', 'template_id', {
  //   name: form.value.name,
  //   email: form.value.email,
  //   company: form.value.company,
  //   phone: form.value.phone,
  //   projectType: form.value.projectType,
  //   budget: form.value.budget,
  //   timeline: form.value.timeline,
  //   message: form.value.message
  // }, 'user_id')
  sendEmail();
  showSuccess.value = true;
  setTimeout(() => {
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
    showSuccess.value = false;
  }, 3000);
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
