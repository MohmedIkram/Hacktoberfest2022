import java.util.*

inline fun <reified T> prompt(text: String): T {
    return prompt(text, null)
}

inline fun <reified T> prompt(text: String, default: T?): T {
    return when (T::class) {
        String::class -> promptString(text, default as String) as T
        Int::class -> promptInt(text, default as Int) as T
        Boolean::class -> promptBoolean(text, default as Boolean) as T
        else -> throw Exception("Invalid type")
    }
}

fun promptString(text: String, default: String?): String {
    val question = if (default == null) "$text " else "$text ($default) "
    print(question)
    val result = readLine()
    if (default == null && (result == null || result.isNotEmpty())) {
        println("Please type your answer")
        return promptString(text, default)
    }
    return result ?: default!!
}

fun promptInt(text: String, default: Int?): Int {
    val question = if (default == null) "$text " else "$text ($default) "
    print(question)
    val result = readLine()
    if (default == null && (result == null || result.toIntOrNull() == null)) {
        println("Please type a valid integer number")
        return promptInt(text, default)
    }
    return result?.toInt() ?: default!!
}

fun parseBoolean(text: String?): Boolean? {
    return if (text == null)
        null
    else
        when (text.lowercase(Locale.getDefault())) {
            "y" -> true
            "true" -> true
            "n" -> false
            "false" -> false
            else -> null
        }
}

fun booleanToString(bool: Boolean?): String? {
    return if (bool == null)
        null
    else
        when (bool) {
            true -> "Y"
            false -> "N"
        }
}

fun promptBoolean(text: String, default: Boolean?): Boolean {
    val stringDefaultValue = booleanToString(default)
    val question = if (stringDefaultValue == null) "$text " else "$text ($stringDefaultValue) "
    print(question)
    val result = readLine()
    val parsed = parseBoolean(result)
    if (default == null && parsed == null) {
        println("Please type a valid option (Y/N)")
        return promptBoolean(text, default)
    }
    return (parsed ?: default) as Boolean
}

/**
 * Simple Terminal Cli
 *
 * val user = Cli.name
 * val age = Cli.age
 * val isDeveloper = Cli.isDeveloper
 */
object Cli {
    val name: String by lazy {
        prompt("Insert your name:")
    }

    val age : Int by lazy {
        prompt("Insert your age:")
    }

    val isDeveloper: Boolean by lazy {
        prompt("Are you a developer?", false)
    }
}
