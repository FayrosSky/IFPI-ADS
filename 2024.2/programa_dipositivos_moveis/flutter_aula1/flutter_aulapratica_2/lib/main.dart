import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  //comando slt + tab dá essa estrututura abaixa básica

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutrer Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        visualDensity: VisualDensity.adaptivePlatformDensity,
      ), //Theme Data
      home: MyHomePage(title: 'Flutter Demo Home Page'),
    );
  }
} //MaterialApp

//criando essa classe do statefull com stf + tab

class MyHomePage extends StatefulWidget {
  final String title;
  const MyHomePage(
      {super.key,
      required this.title}); //pegando o parâmetro nomeado title e salvando no atributo da classe title

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
  int counter = 0;
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      //Scaffold Nossa estrutura do app, nossa carcaça do app(app bar e body
      appBar: AppBar(
        backgroundColor: Colors.blue,
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.spaceAround,
          children: [Text(counter.toString()), Text("Davyd"), Text("Davyd")],
        ),
      ),
      floatingActionButton: FloatingActionButton(
        onPressed: () {
          setState(() {
            counter++;
          });
        },
        child: Icon(Icons.add),
      ),
      bottomNavigationBar: BottomNavigationBar(items: const [
        BottomNavigationBarItem(icon: Icon(Icons.home), label: 'Home'),
        BottomNavigationBarItem(icon: Icon(Icons.settings), label: 'Settings'),
        BottomNavigationBarItem(
            icon: Icon(Icons.account_balance), label: 'Saldo'),
      ]),
      drawer: Drawer(
          child: ListView(padding: EdgeInsets.zero, children: [
        const UserAccountsDrawerHeader(
            accountName: Text('Davyd Lucas'),
            accountEmail: Text("Davydlucas@play"),
            currentAccountPicture: CircleAvatar(
              backgroundImage: AssetImage('images/dleletrocomp.png'),
            ))
      ])),
    );
  }
}
