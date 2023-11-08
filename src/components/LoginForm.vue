<template>
    <div class="modal fade" id="loginModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered" role="document">
            <div class="modal-content"><!-- Pills navs -->
                <ul class="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                    <li class="nav-item" role="presentation">
                        <a class="nav-link active" id="tab-login" data-bs-toggle="pill" href="#pills-login" role="tab"
                            aria-controls="pills-login" aria-selected="true">Login</a>
                    </li>
                    <li class="nav-item" role="presentation">
                        <a class="nav-link" id="tab-register" data-bs-toggle="pill" href="#pills-register" role="tab"
                            aria-controls="pills-register" aria-selected="false">Register</a>
                    </li>
                </ul>
                <!-- Pills navs -->

                <!-- Pills content -->
                <div class="tab-content">
                    <div class="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">
                        <form>

                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <input type="email" id="loginName" class="form-control" />
                                <label class="form-label" for="loginName">Username</label>
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-4">
                                <input type="password" id="loginPassword" class="form-control" />
                                <label class="form-label" for="loginPassword">Password</label>
                            </div>

                            <div v-if="loginError" class="alert alert-danger">
                                Invalid username and/or password
                            </div>

                            <!-- 2 column grid layout -->
                            <div class="row mb-4">
                                <div class="col-md-6 d-flex justify-content-center">
                                    <!-- Checkbox -->
                                    <div class="form-check mb-3 mb-md-0">
                                        <input class="form-check-input" type="checkbox" value="" id="loginCheck" checked />
                                        <label class="form-check-label" for="loginCheck"> Remember me </label>
                                    </div>
                                </div>

                                <div class="col-md-6 d-flex justify-content-center">
                                    <!-- Simple link -->
                                    <a href="#!">Forgot password?</a>
                                </div>
                            </div>

                            <!-- Submit button -->
                            <button type="submit" class="btn btn-primary btn-block mb-4" @click="login">Sign in</button>


                        </form>
                    </div>
                    <div class="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">
                        <form>


                            <!-- Name input -->
                            <div class="form-outline mb-4">
                                <input type="text" id="registerName" class="form-control" />
                                <label class="form-label" for="registerName">Name</label>
                            </div>

                            <!-- Username input -->
                            <div class="form-outline mb-4">
                                <input type="text" id="registerUsername" class="form-control" />
                                <label class="form-label" for="registerUsername">Username</label>
                            </div>

                            <!-- Email input -->
                            <div class="form-outline mb-4">
                                <input type="email" id="registerEmail" class="form-control" />
                                <label class="form-label" for="registerEmail">Email</label>
                            </div>

                            <!-- Password input -->
                            <div class="form-outline mb-4">
                                <input type="password" id="registerPassword" class="form-control" />
                                <label class="form-label" for="registerPassword">Password</label>
                            </div>

                            <!-- Repeat Password input -->
                            <div class="form-outline mb-4">
                                <input type="password" id="registerRepeatPassword" class="form-control" />
                                <label class="form-label" for="registerRepeatPassword">Repeat password</label>
                            </div>

                            <!-- Checkbox -->
                            <div class="form-check d-flex justify-content-center mb-4">
                                <input class="form-check-input me-2" type="checkbox" value="" id="registerCheck" checked
                                    aria-describedby="registerCheckHelpText" />
                                <label class="form-check-label" for="registerCheck">
                                    I have read and agree to the terms
                                </label>
                            </div>

                            <!-- Submit button -->
                            <button type="submit" @click.prevent="register" class="btn btn-primary btn-block mb-3">Sign
                                Up</button>
                        </form>
                    </div>
                </div>
                <!-- Pills content -->
            </div>
        </div>
    </div>
</template>


<script>
export default {
    emits: ['login'],
    data() { return { 'loginError': false } },

    methods: {
        setCookie(cname, cvalue, exdays) {
            const d = new Date();
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            let expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
            console.log(document.cookie)
        },
        async login() {
            const username = document.getElementById("loginName").value;
            const pass = document.getElementById("loginPassword").value;
            var url = this.host + "/checkCredentials.php";
            var formData = new FormData();
            formData.append('username', username);
            formData.append('password', pass);

            let res = await fetch(url, { method: 'POST', body: formData, credentials: "include" });
            console.log((res.cookies));
            const json = await res.json();
            if (json['result'] != 'success') { this.loginError = true; } else {
                this.loginError = false;
                this.setCookie('PHPSESSID', json['session'], 1);
                this.$emit('login')
            }


        },

        async register() {
            const username = document.getElementById("registerUsername").value;
            const pass = document.getElementById("registerPassword").value;
            const email = document.getElementById("registerEmail").value;
            const name = document.getElementById("registerName").value;
            var url = this.host + "/createUser.php";
            var formData = new FormData();
            formData.append('username', username);
            formData.append('password', pass);
            formData.append('email', email);
            formData.append('name', name);

            let res = await fetch(url, { method: 'POST', body: formData, credentials: "include" });
            const json = await res.json();



        }
    }
}

</script>


<style scoped>
.modal-content {
    padding: 30px;
}

.nav-link.active {
    background-color: #e3ebf7;
    color: #285192;
}

.nav-link {
    background-color: rgba(128, 128, 128, 0.064);
    color: rgba(0, 0, 0, 0.55);
}

.btn.btn-primary {
    width: 100%;
}
</style>