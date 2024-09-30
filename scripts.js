function filterPackages() {
    const searchBar = document.getElementById("searchBar");
    const filter = searchBar.value.toLowerCase();
    const packageCards = document.querySelectorAll(".package-card");

    packageCards.forEach(card => {
        const packageName = card.querySelector("h2").textContent.toLowerCase();
        if (packageName.includes(filter)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
}

function goBack() {
    window.history.back();
}

document.addEventListener("DOMContentLoaded", () => {
    const urlParams = new URLSearchParams(window.location.search);
    const packageName = urlParams.get("name");

    if (packageName) {
        const packages = {
            custom_widgets: {
                description: "A collection of highly customizable widgets that can be easily integrated into your Flutter project.",
                code: `class CustomWidget extends StatelessWidget {
    @override
    Widget build(BuildContext context) {
        return Container(
            color: Colors.blue,
            child: Text('Custom Widget'),
        );
    }
}`,
                images: ["https://via.placeholder.com/500x300", "https://via.placeholder.com/500x300"]
            },
            state_management: {
                description: "This package simplifies the process of managing state in Flutter applications.",
                code: `class StateManagementWidget extends StatefulWidget {
    @override
    _StateManagementWidgetState createState() => _StateManagementWidgetState();
}

class _StateManagementWidgetState extends State<StateManagementWidget> {
    int counter = 0;

    @override
    Widget build(BuildContext context) {
        return Column(
            children: [
                Text('Counter: \$counter'),
                ElevatedButton(
                    onPressed: () {
                        setState(() {
                            counter++;
                        });
                    },
                    child: Text('Increment'),
                ),
            ],
        );
    }
}`,
                images: ["https://via.placeholder.com/500x300", "https://via.placeholder.com/500x300"]
            },
            animations: {
                description: "This package provides a set of animations that make your Flutter app more dynamic and interactive.",
                code: `class AnimationWidget extends StatefulWidget {
    @override
    _AnimationWidgetState createState() => _AnimationWidgetState();
}

class _AnimationWidgetState extends State<AnimationWidget> with SingleTickerProviderStateMixin {
    AnimationController _controller;

    @override
    void initState() {
        _controller = AnimationController(duration: const Duration(seconds: 2), vsync: this);
        _controller.forward();
        super.initState();
    }

    @override
    Widget build(BuildContext context) {
        return ScaleTransition(
            scale: _controller,
            child: Container(
                color: Colors.green,
                child: Text('Animated Widget'),
            ),
        );
    }
}`,
                images: ["https://via.placeholder.com/500x300", "https://via.placeholder.com/500x300"]
            }
        };

        const package = packages[packageName];
        if (package) {
            document.getElementById("packageDescription").textContent = package.description;
            document.getElementById("packageCode").textContent = package.code;

            const imagesDiv = document.getElementById("packageImages");
            package.images.forEach(src => {
                const img = document.createElement("img");
                img.src = src;
                imagesDiv.appendChild(img);
            });
        }
    }
});
