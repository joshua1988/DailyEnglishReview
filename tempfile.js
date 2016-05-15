<View style={styles.secondContainer}>
    <Image source={{uri: book.volumeInfo.imageLinks.thumbnail}}
                style={styles.thumbnail} />
    <View style={styles.rightContainer}>
        <Text style={styles.title}>{book.volumeInfo.title}</Text>
        <Text style={styles.author}>{book.volumeInfo.authors}</Text>
    </View>
</View>