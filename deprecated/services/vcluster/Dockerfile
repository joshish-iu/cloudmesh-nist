# THIS IS ALL WRONG

FROM ubuntu:18.04
MAINTAINER Gregor von Laszewski (laszewksi@gmail.com)

RUN apt-get update -q && apt-get install -qy \
    build-essential \
    python-dev \
    python-pip \
    libssl-dev \
    zlib1g-dev \
    libbz2-dev \
    libreadline-dev \
    libsqlite3-dev \
    pandoc \
    wget \
    curl \
    emacs \
    git-core \
    default-jre \
    software-properties-common -y

# install net tools
RUN apt-get install -q -y net-tools

RUN git clone git://github.com/yyuu/pyenv.git .pyenv
RUN git clone https://github.com/yyuu/pyenv-virtualenv.git ~/.pyenv/plugins/pyenv-virtualenv

ENV HOME  /
ENV PYENV_ROOT /.pyenv
ENV PATH $PYENV_ROOT/shims:$PYENV_ROOT/bin:$PATH

RUN pyenv install 2.7.6
RUN pyenv global 2.7.6

RUN git clone https://github.com/cloudmesh-community/hid-sp18-508.git

WORKDIR /hid-sp18-508/swagger/cloudmesh/vc

RUN wget http://central.maven.org/maven2/io/swagger/swagger-codegen-cli/2.3.1/swagger-codegen-cli-2.3.1.jar


EXPOSE 8080

RUN make service

CMD ["make", "start"]

