## Driver Dispatch System: Kafka Implementation
### Description
For a detailed description, click [here](https://docs.google.com/document/d/1RM8zvoXEO2cDK-3hQD18rymm81boOahkdFB_lpI_X8A/edit?usp=sharing)

### Setup

- For simplicity, the `cab` and `driver` microservices have been reduced to modules.
- To run the application, we have to run both modules separately. In one terminal, run the following:

        yarn run cab

- In another terminal, run the following:

        yarn run driver


![terminals](terminals.png)

### Kafka setup

- Install java 8

        brew tap caskroom/versions
        brew cask install java8

- Install kafka and start up zookeeper and kafka

        brew install kafka
        brew services start zookeeper
        brew services start kafka
